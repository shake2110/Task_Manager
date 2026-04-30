import { CheckCircleOutlined, SyncOutlined, DownOutlined, RightOutlined } from '@/shared/antd-imports';
import { useRef, useState } from 'react';
import Form from 'antd/es/form';
import Input, { InputRef } from 'antd/es/input';
import Flex from 'antd/es/flex';
import Card from 'antd/es/card';
import Collapse from 'antd/es/collapse';
import ConfigProvider from 'antd/es/config-provider';
import Table, { TableProps } from 'antd/es/table';
import Tooltip from 'antd/es/tooltip';
import Typography from 'antd/es/typography';
import Button from 'antd/es/button';
import Alert from 'antd/es/alert';

import EmptyListPlaceholder from '@components/EmptyListPlaceholder';
import { IMyTask } from '@/types/home/my-tasks.types';
import { useTranslation } from 'react-i18next';
import { colors } from '@/styles/colors';
import {
  useGetPersonalTasksQuery,
  useMarkPersonalTaskAsDoneMutation,
} from '@/api/home-page/home-page.api.service';
import { useCreatePersonalTaskMutation } from '@/api/home-page/home-page.api.service';

const TodoList = () => {
  const [isAlertShowing, setIsAlertShowing] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [form] = Form.useForm();
  const { t } = useTranslation('home');

  const [createPersonalTask, { isLoading: isCreatingPersonalTask }] =
    useCreatePersonalTaskMutation();
  const [markPersonalTaskAsDone, { isLoading: isMarkingPersonalTaskAsDone }] =
    useMarkPersonalTaskAsDoneMutation();
  const { data, isFetching, refetch } = useGetPersonalTasksQuery();

  // ref for todo input field
  const todoInputRef = useRef<InputRef | null>(null);

  // function to handle todo submit
  const handleTodoSubmit = async (values: any) => {
    if (!values.name || values.name.trim() === '') return;
    const newTodo: IMyTask = {
      name: values.name,
      done: false,
      is_task: false,
      color_code: '#000',
      manual_progress: 0, // FIXED: Added required property
    };

    const res = await createPersonalTask(newTodo);
    if (res.data) {
      refetch();
    }

    setIsAlertShowing(false);
    form.resetFields();
  };

  const handleCompleteTodo = async (id: string | undefined) => {
    if (!id) return;
    const res = await markPersonalTaskAsDone(id);
    if (res.data) {
      refetch();
    }
  };

  // table columns
  const columns: TableProps<IMyTask>['columns'] = [
    {
      key: 'completeBtn',
      width: 32,
      render: (record: IMyTask) => (
        <ConfigProvider wave={{ disabled: true }}>
          <Tooltip title={t('home:todoList.markAsDone')}>
            <Button
              type="text"
              className="border-none flex items-center justify-center"
              style={{ backgroundColor: 'transparent' }}
              shape="circle"
              icon={
                <CheckCircleOutlined
                  style={{ 
                    fontSize: '20px',
                    color: record.done ? 'var(--flat-secondary)' : '#D1D5DB', // High contrast Emerald vs Gray 300
                    transition: 'color 0.2s ease'
                  }}
                />
              }
              onClick={() => handleCompleteTodo(record.id)}
            />
          </Tooltip>
        </ConfigProvider>
      ),
    },
    {
      key: 'name',
      render: (record: IMyTask) => (
        <Typography.Paragraph style={{ margin: 0, paddingInlineEnd: 6 }}>
          <Tooltip title={record.name}>{record.name}</Tooltip>
        </Typography.Paragraph>
      ),
    },
  ];

  return (
    <Card className="flat-card" bodyStyle={{ padding: 0 }}>
      <style>{`
        .todo-collapse .ant-collapse-header {
          display: flex !important;
          align-items: center !important;
          padding: 12px 16px !important;
        }
        .todo-collapse .ant-collapse-expand-icon {
          margin-right: 8px !important;
          display: flex !important;
          align-items: center !important;
        }
      `}</style>
      <Collapse
        defaultActiveKey={[]}
        ghost
        size="small"
        className="todo-collapse"
        expandIcon={({ isActive }) => 
          isActive ? <DownOutlined /> : <RightOutlined />
        }
        onChange={(keys) => {
          setIsCollapsed(keys.length === 0);
        }}
        items={[
          {
            key: '1',
            label: (
              <Flex style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Typography.Title level={5} style={{ margin: 0, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--flat-fg)' }}>
                  {t('home:todoList.title')} ({data?.body?.length || 0})
                </Typography.Title>
                <Tooltip title={t('home:todoList.refreshTasks')}>
                  <Button 
                    className="flat-btn-secondary"
                    icon={<SyncOutlined spin={isFetching} />} 
                    onClick={(e) => {
                      e.stopPropagation();
                      refetch();
                    }} 
                  />
                </Tooltip>
              </Flex>
            ),
            children: (
              <div style={{ padding: '0 16px 16px 16px' }}>
                <Form form={form} onFinish={handleTodoSubmit}>
                  <Form.Item name="name">
                    <Flex vertical>
                      <Input
                        ref={todoInputRef}
                        className="bg-gray-100 border-none rounded-md h-12 focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder={t('home:todoList.addTask')}
                        onChange={e => {
                          const inputValue = e.currentTarget.value;

                          if (inputValue.length >= 1) setIsAlertShowing(true);
                          else if (inputValue === '') setIsAlertShowing(false);
                        }}
                      />
                      {isAlertShowing && (
                        <Alert
                          message={
                            <Typography.Text style={{ fontSize: 11, fontWeight: 600 }}>
                              {t('home:todoList.pressEnter')} <strong>Enter</strong>{' '}
                              {t('home:todoList.toCreate')}
                            </Typography.Text>
                          }
                          type="info"
                          style={{
                            width: 'fit-content',
                            borderRadius: '6px',
                            border: 'none',
                            backgroundColor: 'var(--flat-muted)',
                            padding: '4px 12px',
                            marginTop: '8px'
                          }}
                        />
                      )}
                    </Flex>
                  </Form.Item>
                </Form>

                <div style={{ maxHeight: 300, overflow: 'auto' }}>
                  {(!data?.body || data?.body?.length === 0) ? (
                    <EmptyListPlaceholder
                      imageSrc="https://s3.us-west-2.amazonaws.com/taskeye.com/assets/empty-box.webp"
                      text={t('home:todoList.noTasks')}
                    />
                  ) : (
                    <Table
                      className="custom-two-colors-row-table"
                      rowKey={record => record.id || ''}
                      dataSource={data?.body}
                      columns={columns}
                      showHeader={false}
                      pagination={false}
                      size="small"
                      loading={isFetching}
                    />
                  )}
                </div>
              </div>
            ),
          },
        ]}
      />
    </Card>
  );
};

export default TodoList;
