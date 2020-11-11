export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  json: any;
  numeric: number;
  time: any;
  timestamp: any;
  uuid: string;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: Maybe<Scalars["Boolean"]>;
  _gt?: Maybe<Scalars["Boolean"]>;
  _gte?: Maybe<Scalars["Boolean"]>;
  _in?: Maybe<Array<Scalars["Boolean"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Boolean"]>;
  _lte?: Maybe<Scalars["Boolean"]>;
  _neq?: Maybe<Scalars["Boolean"]>;
  _nin?: Maybe<Array<Scalars["Boolean"]>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Scalars["Int"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Scalars["Int"]>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "activity" */
export type Activity = {
  __typename?: "activity";
  createdAt: Scalars["timestamp"];
  date: Scalars["date"];
  deletedAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  duration: Scalars["Int"];
  /** An object relationship */
  employee: Employee;
  employeeId: Scalars["uuid"];
  id: Scalars["uuid"];
  metaData?: Maybe<Scalars["json"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  projectId?: Maybe<Scalars["uuid"]>;
  source: Scalars["String"];
  /** An object relationship */
  task?: Maybe<Task>;
  taskId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  time: Scalars["time"];
  timeSlotId?: Maybe<Scalars["uuid"]>;
  /** An object relationship */
  time_slot?: Maybe<TimeSlot>;
  title: Scalars["String"];
  type?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["timestamp"];
};

/** columns and relationships of "activity" */
export type ActivityMetaDataArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "activity" */
export type ActivityAggregate = {
  __typename?: "activity_aggregate";
  aggregate?: Maybe<ActivityAggregateFields>;
  nodes: Array<Activity>;
};

/** aggregate fields of "activity" */
export type ActivityAggregateFields = {
  __typename?: "activity_aggregate_fields";
  avg?: Maybe<ActivityAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<ActivityMaxFields>;
  min?: Maybe<ActivityMinFields>;
  stddev?: Maybe<ActivityStddevFields>;
  stddev_pop?: Maybe<ActivityStddevPopFields>;
  stddev_samp?: Maybe<ActivityStddevSampFields>;
  sum?: Maybe<ActivitySumFields>;
  var_pop?: Maybe<ActivityVarPopFields>;
  var_samp?: Maybe<ActivityVarSampFields>;
  variance?: Maybe<ActivityVarianceFields>;
};

/** aggregate fields of "activity" */
export type ActivityAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ActivitySelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "activity" */
export type ActivityAggregateOrderBy = {
  avg?: Maybe<ActivityAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ActivityMaxOrderBy>;
  min?: Maybe<ActivityMinOrderBy>;
  stddev?: Maybe<ActivityStddevOrderBy>;
  stddev_pop?: Maybe<ActivityStddevPopOrderBy>;
  stddev_samp?: Maybe<ActivityStddevSampOrderBy>;
  sum?: Maybe<ActivitySumOrderBy>;
  var_pop?: Maybe<ActivityVarPopOrderBy>;
  var_samp?: Maybe<ActivityVarSampOrderBy>;
  variance?: Maybe<ActivityVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "activity" */
export type ActivityArrRelInsertInput = {
  data: Array<ActivityInsertInput>;
  on_conflict?: Maybe<ActivityOnConflict>;
};

/** aggregate avg on columns */
export type ActivityAvgFields = {
  __typename?: "activity_avg_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "activity" */
export type ActivityAvgOrderBy = {
  duration?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "activity". All fields are combined with a logical 'AND'. */
export type ActivityBoolExp = {
  _and?: Maybe<Array<Maybe<ActivityBoolExp>>>;
  _not?: Maybe<ActivityBoolExp>;
  _or?: Maybe<Array<Maybe<ActivityBoolExp>>>;
  createdAt?: Maybe<TimestampComparisonExp>;
  date?: Maybe<DateComparisonExp>;
  deletedAt?: Maybe<TimestampComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  duration?: Maybe<IntComparisonExp>;
  employee?: Maybe<EmployeeBoolExp>;
  employeeId?: Maybe<UuidComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  metaData?: Maybe<JsonComparisonExp>;
  organizationId?: Maybe<UuidComparisonExp>;
  projectId?: Maybe<UuidComparisonExp>;
  source?: Maybe<StringComparisonExp>;
  task?: Maybe<TaskBoolExp>;
  taskId?: Maybe<UuidComparisonExp>;
  tenantId?: Maybe<UuidComparisonExp>;
  time?: Maybe<TimeComparisonExp>;
  timeSlotId?: Maybe<UuidComparisonExp>;
  time_slot?: Maybe<TimeSlotBoolExp>;
  title?: Maybe<StringComparisonExp>;
  type?: Maybe<StringComparisonExp>;
  updatedAt?: Maybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "activity" */
export enum ActivityConstraint {
  /** unique or primary key constraint */
  Pk_24625a1d6b1b089c8ae206fe467 = "PK_24625a1d6b1b089c8ae206fe467"
}

/** input type for incrementing integer column in table "activity" */
export type ActivityIncInput = {
  duration?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "activity" */
export type ActivityInsertInput = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  date?: Maybe<Scalars["date"]>;
  deletedAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Int"]>;
  employee?: Maybe<EmployeeObjRelInsertInput>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  metaData?: Maybe<Scalars["json"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  projectId?: Maybe<Scalars["uuid"]>;
  source?: Maybe<Scalars["String"]>;
  task?: Maybe<TaskObjRelInsertInput>;
  taskId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  time?: Maybe<Scalars["time"]>;
  timeSlotId?: Maybe<Scalars["uuid"]>;
  time_slot?: Maybe<TimeSlotObjRelInsertInput>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate max on columns */
export type ActivityMaxFields = {
  __typename?: "activity_max_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  date?: Maybe<Scalars["date"]>;
  deletedAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Int"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  projectId?: Maybe<Scalars["uuid"]>;
  source?: Maybe<Scalars["String"]>;
  taskId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  timeSlotId?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by max() on columns of table "activity" */
export type ActivityMaxOrderBy = {
  createdAt?: Maybe<OrderBy>;
  date?: Maybe<OrderBy>;
  deletedAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  duration?: Maybe<OrderBy>;
  employeeId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  projectId?: Maybe<OrderBy>;
  source?: Maybe<OrderBy>;
  taskId?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  timeSlotId?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ActivityMinFields = {
  __typename?: "activity_min_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  date?: Maybe<Scalars["date"]>;
  deletedAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Int"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  projectId?: Maybe<Scalars["uuid"]>;
  source?: Maybe<Scalars["String"]>;
  taskId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  timeSlotId?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by min() on columns of table "activity" */
export type ActivityMinOrderBy = {
  createdAt?: Maybe<OrderBy>;
  date?: Maybe<OrderBy>;
  deletedAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  duration?: Maybe<OrderBy>;
  employeeId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  projectId?: Maybe<OrderBy>;
  source?: Maybe<OrderBy>;
  taskId?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  timeSlotId?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** response of any mutation on the table "activity" */
export type ActivityMutationResponse = {
  __typename?: "activity_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Activity>;
};

/** input type for inserting object relation for remote table "activity" */
export type ActivityObjRelInsertInput = {
  data: ActivityInsertInput;
  on_conflict?: Maybe<ActivityOnConflict>;
};

/** on conflict condition type for table "activity" */
export type ActivityOnConflict = {
  constraint: ActivityConstraint;
  update_columns: Array<ActivityUpdateColumn>;
  where?: Maybe<ActivityBoolExp>;
};

/** ordering options when selecting data from "activity" */
export type ActivityOrderBy = {
  createdAt?: Maybe<OrderBy>;
  date?: Maybe<OrderBy>;
  deletedAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  duration?: Maybe<OrderBy>;
  employee?: Maybe<EmployeeOrderBy>;
  employeeId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  metaData?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  projectId?: Maybe<OrderBy>;
  source?: Maybe<OrderBy>;
  task?: Maybe<TaskOrderBy>;
  taskId?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  time?: Maybe<OrderBy>;
  timeSlotId?: Maybe<OrderBy>;
  time_slot?: Maybe<TimeSlotOrderBy>;
  title?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: "activity" */
export type ActivityPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "activity" */
export enum ActivitySelectColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Date = "date",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Description = "description",
  /** column name */
  Duration = "duration",
  /** column name */
  EmployeeId = "employeeId",
  /** column name */
  Id = "id",
  /** column name */
  MetaData = "metaData",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  ProjectId = "projectId",
  /** column name */
  Source = "source",
  /** column name */
  TaskId = "taskId",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  Time = "time",
  /** column name */
  TimeSlotId = "timeSlotId",
  /** column name */
  Title = "title",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** input type for updating data in table "activity" */
export type ActivitySetInput = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  date?: Maybe<Scalars["date"]>;
  deletedAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["Int"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  metaData?: Maybe<Scalars["json"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  projectId?: Maybe<Scalars["uuid"]>;
  source?: Maybe<Scalars["String"]>;
  taskId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  time?: Maybe<Scalars["time"]>;
  timeSlotId?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate stddev on columns */
export type ActivityStddevFields = {
  __typename?: "activity_stddev_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "activity" */
export type ActivityStddevOrderBy = {
  duration?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ActivityStddevPopFields = {
  __typename?: "activity_stddev_pop_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "activity" */
export type ActivityStddevPopOrderBy = {
  duration?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ActivityStddevSampFields = {
  __typename?: "activity_stddev_samp_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "activity" */
export type ActivityStddevSampOrderBy = {
  duration?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ActivitySumFields = {
  __typename?: "activity_sum_fields";
  duration?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "activity" */
export type ActivitySumOrderBy = {
  duration?: Maybe<OrderBy>;
};

/** update columns of table "activity" */
export enum ActivityUpdateColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Date = "date",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Description = "description",
  /** column name */
  Duration = "duration",
  /** column name */
  EmployeeId = "employeeId",
  /** column name */
  Id = "id",
  /** column name */
  MetaData = "metaData",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  ProjectId = "projectId",
  /** column name */
  Source = "source",
  /** column name */
  TaskId = "taskId",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  Time = "time",
  /** column name */
  TimeSlotId = "timeSlotId",
  /** column name */
  Title = "title",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** aggregate var_pop on columns */
export type ActivityVarPopFields = {
  __typename?: "activity_var_pop_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "activity" */
export type ActivityVarPopOrderBy = {
  duration?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ActivityVarSampFields = {
  __typename?: "activity_var_samp_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "activity" */
export type ActivityVarSampOrderBy = {
  duration?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ActivityVarianceFields = {
  __typename?: "activity_variance_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "activity" */
export type ActivityVarianceOrderBy = {
  duration?: Maybe<OrderBy>;
};

/** columns and relationships of "appointment_employee" */
export type AppointmentEmployee = {
  __typename?: "appointment_employee";
  appointmentId: Scalars["String"];
  createdAt: Scalars["timestamp"];
  employeeAppointmentId?: Maybe<Scalars["uuid"]>;
  employeeId: Scalars["String"];
  /** An object relationship */
  employee_appointment?: Maybe<EmployeeAppointment>;
  id: Scalars["uuid"];
  organizationId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt: Scalars["timestamp"];
};

/** aggregated selection of "appointment_employee" */
export type AppointmentEmployeeAggregate = {
  __typename?: "appointment_employee_aggregate";
  aggregate?: Maybe<AppointmentEmployeeAggregateFields>;
  nodes: Array<AppointmentEmployee>;
};

/** aggregate fields of "appointment_employee" */
export type AppointmentEmployeeAggregateFields = {
  __typename?: "appointment_employee_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<AppointmentEmployeeMaxFields>;
  min?: Maybe<AppointmentEmployeeMinFields>;
};

/** aggregate fields of "appointment_employee" */
export type AppointmentEmployeeAggregateFieldsCountArgs = {
  columns?: Maybe<Array<AppointmentEmployeeSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "appointment_employee" */
export type AppointmentEmployeeAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<AppointmentEmployeeMaxOrderBy>;
  min?: Maybe<AppointmentEmployeeMinOrderBy>;
};

/** input type for inserting array relation for remote table "appointment_employee" */
export type AppointmentEmployeeArrRelInsertInput = {
  data: Array<AppointmentEmployeeInsertInput>;
  on_conflict?: Maybe<AppointmentEmployeeOnConflict>;
};

/** Boolean expression to filter rows from the table "appointment_employee". All fields are combined with a logical 'AND'. */
export type AppointmentEmployeeBoolExp = {
  _and?: Maybe<Array<Maybe<AppointmentEmployeeBoolExp>>>;
  _not?: Maybe<AppointmentEmployeeBoolExp>;
  _or?: Maybe<Array<Maybe<AppointmentEmployeeBoolExp>>>;
  appointmentId?: Maybe<StringComparisonExp>;
  createdAt?: Maybe<TimestampComparisonExp>;
  employeeAppointmentId?: Maybe<UuidComparisonExp>;
  employeeId?: Maybe<StringComparisonExp>;
  employee_appointment?: Maybe<EmployeeAppointmentBoolExp>;
  id?: Maybe<UuidComparisonExp>;
  organizationId?: Maybe<UuidComparisonExp>;
  tenantId?: Maybe<UuidComparisonExp>;
  updatedAt?: Maybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "appointment_employee" */
export enum AppointmentEmployeeConstraint {
  /** unique or primary key constraint */
  PkCad339a11ed0408e417671162fb = "PK_cad339a11ed0408e417671162fb"
}

/** input type for inserting data into table "appointment_employee" */
export type AppointmentEmployeeInsertInput = {
  appointmentId?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  employeeAppointmentId?: Maybe<Scalars["uuid"]>;
  employeeId?: Maybe<Scalars["String"]>;
  employee_appointment?: Maybe<EmployeeAppointmentObjRelInsertInput>;
  id?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate max on columns */
export type AppointmentEmployeeMaxFields = {
  __typename?: "appointment_employee_max_fields";
  appointmentId?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  employeeAppointmentId?: Maybe<Scalars["uuid"]>;
  employeeId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by max() on columns of table "appointment_employee" */
export type AppointmentEmployeeMaxOrderBy = {
  appointmentId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  employeeAppointmentId?: Maybe<OrderBy>;
  employeeId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type AppointmentEmployeeMinFields = {
  __typename?: "appointment_employee_min_fields";
  appointmentId?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  employeeAppointmentId?: Maybe<Scalars["uuid"]>;
  employeeId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by min() on columns of table "appointment_employee" */
export type AppointmentEmployeeMinOrderBy = {
  appointmentId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  employeeAppointmentId?: Maybe<OrderBy>;
  employeeId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** response of any mutation on the table "appointment_employee" */
export type AppointmentEmployeeMutationResponse = {
  __typename?: "appointment_employee_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<AppointmentEmployee>;
};

/** input type for inserting object relation for remote table "appointment_employee" */
export type AppointmentEmployeeObjRelInsertInput = {
  data: AppointmentEmployeeInsertInput;
  on_conflict?: Maybe<AppointmentEmployeeOnConflict>;
};

/** on conflict condition type for table "appointment_employee" */
export type AppointmentEmployeeOnConflict = {
  constraint: AppointmentEmployeeConstraint;
  update_columns: Array<AppointmentEmployeeUpdateColumn>;
  where?: Maybe<AppointmentEmployeeBoolExp>;
};

/** ordering options when selecting data from "appointment_employee" */
export type AppointmentEmployeeOrderBy = {
  appointmentId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  employeeAppointmentId?: Maybe<OrderBy>;
  employeeId?: Maybe<OrderBy>;
  employee_appointment?: Maybe<EmployeeAppointmentOrderBy>;
  id?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: "appointment_employee" */
export type AppointmentEmployeePkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "appointment_employee" */
export enum AppointmentEmployeeSelectColumn {
  /** column name */
  AppointmentId = "appointmentId",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  EmployeeAppointmentId = "employeeAppointmentId",
  /** column name */
  EmployeeId = "employeeId",
  /** column name */
  Id = "id",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** input type for updating data in table "appointment_employee" */
export type AppointmentEmployeeSetInput = {
  appointmentId?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  employeeAppointmentId?: Maybe<Scalars["uuid"]>;
  employeeId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** update columns of table "appointment_employee" */
export enum AppointmentEmployeeUpdateColumn {
  /** column name */
  AppointmentId = "appointmentId",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  EmployeeAppointmentId = "employeeAppointmentId",
  /** column name */
  EmployeeId = "employeeId",
  /** column name */
  Id = "id",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** columns and relationships of "availability_slot" */
export type AvailabilitySlot = {
  __typename?: "availability_slot";
  allDay: Scalars["Boolean"];
  createdAt: Scalars["timestamp"];
  /** An object relationship */
  employee?: Maybe<Employee>;
  employeeId?: Maybe<Scalars["uuid"]>;
  endTime: Scalars["timestamp"];
  id: Scalars["uuid"];
  organizationId?: Maybe<Scalars["uuid"]>;
  startTime: Scalars["timestamp"];
  tenantId?: Maybe<Scalars["uuid"]>;
  type: Scalars["String"];
  updatedAt: Scalars["timestamp"];
};

/** aggregated selection of "availability_slot" */
export type AvailabilitySlotAggregate = {
  __typename?: "availability_slot_aggregate";
  aggregate?: Maybe<AvailabilitySlotAggregateFields>;
  nodes: Array<AvailabilitySlot>;
};

/** aggregate fields of "availability_slot" */
export type AvailabilitySlotAggregateFields = {
  __typename?: "availability_slot_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<AvailabilitySlotMaxFields>;
  min?: Maybe<AvailabilitySlotMinFields>;
};

/** aggregate fields of "availability_slot" */
export type AvailabilitySlotAggregateFieldsCountArgs = {
  columns?: Maybe<Array<AvailabilitySlotSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "availability_slot" */
export type AvailabilitySlotAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<AvailabilitySlotMaxOrderBy>;
  min?: Maybe<AvailabilitySlotMinOrderBy>;
};

/** input type for inserting array relation for remote table "availability_slot" */
export type AvailabilitySlotArrRelInsertInput = {
  data: Array<AvailabilitySlotInsertInput>;
  on_conflict?: Maybe<AvailabilitySlotOnConflict>;
};

/** Boolean expression to filter rows from the table "availability_slot". All fields are combined with a logical 'AND'. */
export type AvailabilitySlotBoolExp = {
  _and?: Maybe<Array<Maybe<AvailabilitySlotBoolExp>>>;
  _not?: Maybe<AvailabilitySlotBoolExp>;
  _or?: Maybe<Array<Maybe<AvailabilitySlotBoolExp>>>;
  allDay?: Maybe<BooleanComparisonExp>;
  createdAt?: Maybe<TimestampComparisonExp>;
  employee?: Maybe<EmployeeBoolExp>;
  employeeId?: Maybe<UuidComparisonExp>;
  endTime?: Maybe<TimestampComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  organizationId?: Maybe<UuidComparisonExp>;
  startTime?: Maybe<TimestampComparisonExp>;
  tenantId?: Maybe<UuidComparisonExp>;
  type?: Maybe<StringComparisonExp>;
  updatedAt?: Maybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "availability_slot" */
export enum AvailabilitySlotConstraint {
  /** unique or primary key constraint */
  Pk_62a782c29fd83da5ba7c4ea55f7 = "PK_62a782c29fd83da5ba7c4ea55f7"
}

/** input type for inserting data into table "availability_slot" */
export type AvailabilitySlotInsertInput = {
  allDay?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  employee?: Maybe<EmployeeObjRelInsertInput>;
  employeeId?: Maybe<Scalars["uuid"]>;
  endTime?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  startTime?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate max on columns */
export type AvailabilitySlotMaxFields = {
  __typename?: "availability_slot_max_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  endTime?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  startTime?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by max() on columns of table "availability_slot" */
export type AvailabilitySlotMaxOrderBy = {
  createdAt?: Maybe<OrderBy>;
  employeeId?: Maybe<OrderBy>;
  endTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  startTime?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type AvailabilitySlotMinFields = {
  __typename?: "availability_slot_min_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  endTime?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  startTime?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by min() on columns of table "availability_slot" */
export type AvailabilitySlotMinOrderBy = {
  createdAt?: Maybe<OrderBy>;
  employeeId?: Maybe<OrderBy>;
  endTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  startTime?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** response of any mutation on the table "availability_slot" */
export type AvailabilitySlotMutationResponse = {
  __typename?: "availability_slot_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<AvailabilitySlot>;
};

/** input type for inserting object relation for remote table "availability_slot" */
export type AvailabilitySlotObjRelInsertInput = {
  data: AvailabilitySlotInsertInput;
  on_conflict?: Maybe<AvailabilitySlotOnConflict>;
};

/** on conflict condition type for table "availability_slot" */
export type AvailabilitySlotOnConflict = {
  constraint: AvailabilitySlotConstraint;
  update_columns: Array<AvailabilitySlotUpdateColumn>;
  where?: Maybe<AvailabilitySlotBoolExp>;
};

/** ordering options when selecting data from "availability_slot" */
export type AvailabilitySlotOrderBy = {
  allDay?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  employee?: Maybe<EmployeeOrderBy>;
  employeeId?: Maybe<OrderBy>;
  endTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  startTime?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  type?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: "availability_slot" */
export type AvailabilitySlotPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "availability_slot" */
export enum AvailabilitySlotSelectColumn {
  /** column name */
  AllDay = "allDay",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  EmployeeId = "employeeId",
  /** column name */
  EndTime = "endTime",
  /** column name */
  Id = "id",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  StartTime = "startTime",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** input type for updating data in table "availability_slot" */
export type AvailabilitySlotSetInput = {
  allDay?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  endTime?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  startTime?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  type?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** update columns of table "availability_slot" */
export enum AvailabilitySlotUpdateColumn {
  /** column name */
  AllDay = "allDay",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  EmployeeId = "employeeId",
  /** column name */
  EndTime = "endTime",
  /** column name */
  Id = "id",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  StartTime = "startTime",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** columns and relationships of "contact" */
export type Contact = {
  __typename?: "contact";
  address?: Maybe<Scalars["String"]>;
  address2?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  createdAt: Scalars["timestamp"];
  /** An array relationship */
  employees: Array<Employee>;
  /** An aggregated array relationship */
  employees_aggregate: EmployeeAggregate;
  fax?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  fiscalInformation?: Maybe<Scalars["String"]>;
  id: Scalars["uuid"];
  lastName?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  postcode?: Maybe<Scalars["Int"]>;
  regionCode?: Maybe<Scalars["String"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt: Scalars["timestamp"];
  website?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "contact" */
export type ContactEmployeesArgs = {
  distinct_on?: Maybe<Array<EmployeeSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<EmployeeOrderBy>>;
  where?: Maybe<EmployeeBoolExp>;
};

/** columns and relationships of "contact" */
export type ContactEmployeesAggregateArgs = {
  distinct_on?: Maybe<Array<EmployeeSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<EmployeeOrderBy>>;
  where?: Maybe<EmployeeBoolExp>;
};

/** aggregated selection of "contact" */
export type ContactAggregate = {
  __typename?: "contact_aggregate";
  aggregate?: Maybe<ContactAggregateFields>;
  nodes: Array<Contact>;
};

/** aggregate fields of "contact" */
export type ContactAggregateFields = {
  __typename?: "contact_aggregate_fields";
  avg?: Maybe<ContactAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<ContactMaxFields>;
  min?: Maybe<ContactMinFields>;
  stddev?: Maybe<ContactStddevFields>;
  stddev_pop?: Maybe<ContactStddevPopFields>;
  stddev_samp?: Maybe<ContactStddevSampFields>;
  sum?: Maybe<ContactSumFields>;
  var_pop?: Maybe<ContactVarPopFields>;
  var_samp?: Maybe<ContactVarSampFields>;
  variance?: Maybe<ContactVarianceFields>;
};

/** aggregate fields of "contact" */
export type ContactAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ContactSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "contact" */
export type ContactAggregateOrderBy = {
  avg?: Maybe<ContactAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ContactMaxOrderBy>;
  min?: Maybe<ContactMinOrderBy>;
  stddev?: Maybe<ContactStddevOrderBy>;
  stddev_pop?: Maybe<ContactStddevPopOrderBy>;
  stddev_samp?: Maybe<ContactStddevSampOrderBy>;
  sum?: Maybe<ContactSumOrderBy>;
  var_pop?: Maybe<ContactVarPopOrderBy>;
  var_samp?: Maybe<ContactVarSampOrderBy>;
  variance?: Maybe<ContactVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "contact" */
export type ContactArrRelInsertInput = {
  data: Array<ContactInsertInput>;
  on_conflict?: Maybe<ContactOnConflict>;
};

/** aggregate avg on columns */
export type ContactAvgFields = {
  __typename?: "contact_avg_fields";
  postcode?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "contact" */
export type ContactAvgOrderBy = {
  postcode?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "contact". All fields are combined with a logical 'AND'. */
export type ContactBoolExp = {
  _and?: Maybe<Array<Maybe<ContactBoolExp>>>;
  _not?: Maybe<ContactBoolExp>;
  _or?: Maybe<Array<Maybe<ContactBoolExp>>>;
  address?: Maybe<StringComparisonExp>;
  address2?: Maybe<StringComparisonExp>;
  city?: Maybe<StringComparisonExp>;
  country?: Maybe<StringComparisonExp>;
  createdAt?: Maybe<TimestampComparisonExp>;
  employees?: Maybe<EmployeeBoolExp>;
  fax?: Maybe<StringComparisonExp>;
  firstName?: Maybe<StringComparisonExp>;
  fiscalInformation?: Maybe<StringComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  lastName?: Maybe<StringComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  organizationId?: Maybe<UuidComparisonExp>;
  postcode?: Maybe<IntComparisonExp>;
  regionCode?: Maybe<StringComparisonExp>;
  tenantId?: Maybe<UuidComparisonExp>;
  updatedAt?: Maybe<TimestampComparisonExp>;
  website?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "contact" */
export enum ContactConstraint {
  /** unique or primary key constraint */
  Pk_2cbbe00f59ab6b3bb5b8d19f989 = "PK_2cbbe00f59ab6b3bb5b8d19f989"
}

/** input type for incrementing integer column in table "contact" */
export type ContactIncInput = {
  postcode?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "contact" */
export type ContactInsertInput = {
  address?: Maybe<Scalars["String"]>;
  address2?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  employees?: Maybe<EmployeeArrRelInsertInput>;
  fax?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  fiscalInformation?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  lastName?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  postcode?: Maybe<Scalars["Int"]>;
  regionCode?: Maybe<Scalars["String"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
  website?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type ContactMaxFields = {
  __typename?: "contact_max_fields";
  address?: Maybe<Scalars["String"]>;
  address2?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  fax?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  fiscalInformation?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  lastName?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  postcode?: Maybe<Scalars["Int"]>;
  regionCode?: Maybe<Scalars["String"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
  website?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "contact" */
export type ContactMaxOrderBy = {
  address?: Maybe<OrderBy>;
  address2?: Maybe<OrderBy>;
  city?: Maybe<OrderBy>;
  country?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  fax?: Maybe<OrderBy>;
  firstName?: Maybe<OrderBy>;
  fiscalInformation?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lastName?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  postcode?: Maybe<OrderBy>;
  regionCode?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  website?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ContactMinFields = {
  __typename?: "contact_min_fields";
  address?: Maybe<Scalars["String"]>;
  address2?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  fax?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  fiscalInformation?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  lastName?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  postcode?: Maybe<Scalars["Int"]>;
  regionCode?: Maybe<Scalars["String"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
  website?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "contact" */
export type ContactMinOrderBy = {
  address?: Maybe<OrderBy>;
  address2?: Maybe<OrderBy>;
  city?: Maybe<OrderBy>;
  country?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  fax?: Maybe<OrderBy>;
  firstName?: Maybe<OrderBy>;
  fiscalInformation?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lastName?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  postcode?: Maybe<OrderBy>;
  regionCode?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  website?: Maybe<OrderBy>;
};

/** response of any mutation on the table "contact" */
export type ContactMutationResponse = {
  __typename?: "contact_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Contact>;
};

/** input type for inserting object relation for remote table "contact" */
export type ContactObjRelInsertInput = {
  data: ContactInsertInput;
  on_conflict?: Maybe<ContactOnConflict>;
};

/** on conflict condition type for table "contact" */
export type ContactOnConflict = {
  constraint: ContactConstraint;
  update_columns: Array<ContactUpdateColumn>;
  where?: Maybe<ContactBoolExp>;
};

/** ordering options when selecting data from "contact" */
export type ContactOrderBy = {
  address?: Maybe<OrderBy>;
  address2?: Maybe<OrderBy>;
  city?: Maybe<OrderBy>;
  country?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  employees_aggregate?: Maybe<EmployeeAggregateOrderBy>;
  fax?: Maybe<OrderBy>;
  firstName?: Maybe<OrderBy>;
  fiscalInformation?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  lastName?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  postcode?: Maybe<OrderBy>;
  regionCode?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  website?: Maybe<OrderBy>;
};

/** primary key columns input for table: "contact" */
export type ContactPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "contact" */
export enum ContactSelectColumn {
  /** column name */
  Address = "address",
  /** column name */
  Address2 = "address2",
  /** column name */
  City = "city",
  /** column name */
  Country = "country",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Fax = "fax",
  /** column name */
  FirstName = "firstName",
  /** column name */
  FiscalInformation = "fiscalInformation",
  /** column name */
  Id = "id",
  /** column name */
  LastName = "lastName",
  /** column name */
  Name = "name",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  Postcode = "postcode",
  /** column name */
  RegionCode = "regionCode",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  Website = "website"
}

/** input type for updating data in table "contact" */
export type ContactSetInput = {
  address?: Maybe<Scalars["String"]>;
  address2?: Maybe<Scalars["String"]>;
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  fax?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  fiscalInformation?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  lastName?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  postcode?: Maybe<Scalars["Int"]>;
  regionCode?: Maybe<Scalars["String"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
  website?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type ContactStddevFields = {
  __typename?: "contact_stddev_fields";
  postcode?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "contact" */
export type ContactStddevOrderBy = {
  postcode?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ContactStddevPopFields = {
  __typename?: "contact_stddev_pop_fields";
  postcode?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "contact" */
export type ContactStddevPopOrderBy = {
  postcode?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ContactStddevSampFields = {
  __typename?: "contact_stddev_samp_fields";
  postcode?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "contact" */
export type ContactStddevSampOrderBy = {
  postcode?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ContactSumFields = {
  __typename?: "contact_sum_fields";
  postcode?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "contact" */
export type ContactSumOrderBy = {
  postcode?: Maybe<OrderBy>;
};

/** update columns of table "contact" */
export enum ContactUpdateColumn {
  /** column name */
  Address = "address",
  /** column name */
  Address2 = "address2",
  /** column name */
  City = "city",
  /** column name */
  Country = "country",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Fax = "fax",
  /** column name */
  FirstName = "firstName",
  /** column name */
  FiscalInformation = "fiscalInformation",
  /** column name */
  Id = "id",
  /** column name */
  LastName = "lastName",
  /** column name */
  Name = "name",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  Postcode = "postcode",
  /** column name */
  RegionCode = "regionCode",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  Website = "website"
}

/** aggregate var_pop on columns */
export type ContactVarPopFields = {
  __typename?: "contact_var_pop_fields";
  postcode?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "contact" */
export type ContactVarPopOrderBy = {
  postcode?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ContactVarSampFields = {
  __typename?: "contact_var_samp_fields";
  postcode?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "contact" */
export type ContactVarSampOrderBy = {
  postcode?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ContactVarianceFields = {
  __typename?: "contact_variance_fields";
  postcode?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "contact" */
export type ContactVarianceOrderBy = {
  postcode?: Maybe<OrderBy>;
};

/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type DateComparisonExp = {
  _eq?: Maybe<Scalars["date"]>;
  _gt?: Maybe<Scalars["date"]>;
  _gte?: Maybe<Scalars["date"]>;
  _in?: Maybe<Array<Scalars["date"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["date"]>;
  _lte?: Maybe<Scalars["date"]>;
  _neq?: Maybe<Scalars["date"]>;
  _nin?: Maybe<Array<Scalars["date"]>>;
};

/** columns and relationships of "employee" */
export type Employee = {
  __typename?: "employee";
  acceptDate?: Maybe<Scalars["timestamp"]>;
  /** An array relationship */
  activities: Array<Activity>;
  /** An aggregated array relationship */
  activities_aggregate: ActivityAggregate;
  anonymousBonus?: Maybe<Scalars["Boolean"]>;
  /** An array relationship */
  availability_slots: Array<AvailabilitySlot>;
  /** An aggregated array relationship */
  availability_slots_aggregate: AvailabilitySlotAggregate;
  averageBonus?: Maybe<Scalars["numeric"]>;
  averageExpenses?: Maybe<Scalars["numeric"]>;
  averageIncome?: Maybe<Scalars["numeric"]>;
  billRateCurrency?: Maybe<Scalars["String"]>;
  billRateValue?: Maybe<Scalars["numeric"]>;
  /** An object relationship */
  contact?: Maybe<Contact>;
  contactId?: Maybe<Scalars["uuid"]>;
  createdAt: Scalars["timestamp"];
  description?: Maybe<Scalars["String"]>;
  employeeLevel?: Maybe<Scalars["String"]>;
  /** An array relationship */
  employee_appointments: Array<EmployeeAppointment>;
  /** An aggregated array relationship */
  employee_appointments_aggregate: EmployeeAppointmentAggregate;
  endWork?: Maybe<Scalars["timestamp"]>;
  /** An array relationship */
  event_types: Array<EventType>;
  /** An aggregated array relationship */
  event_types_aggregate: EventTypeAggregate;
  id: Scalars["uuid"];
  isActive?: Maybe<Scalars["Boolean"]>;
  offerDate?: Maybe<Scalars["timestamp"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  organizationPositionId?: Maybe<Scalars["uuid"]>;
  payPeriod?: Maybe<Scalars["String"]>;
  reWeeklyLimit?: Maybe<Scalars["Int"]>;
  rejectDate?: Maybe<Scalars["timestamp"]>;
  short_description?: Maybe<Scalars["String"]>;
  show_anonymous_bonus?: Maybe<Scalars["Boolean"]>;
  show_average_bonus?: Maybe<Scalars["Boolean"]>;
  show_average_expenses?: Maybe<Scalars["Boolean"]>;
  show_average_income?: Maybe<Scalars["Boolean"]>;
  show_billrate?: Maybe<Scalars["Boolean"]>;
  show_payperiod?: Maybe<Scalars["Boolean"]>;
  show_start_work_on?: Maybe<Scalars["Boolean"]>;
  startedWorkOn?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  /** An array relationship */
  time_logs: Array<TimeLog>;
  /** An aggregated array relationship */
  time_logs_aggregate: TimeLogAggregate;
  /** An array relationship */
  time_slots: Array<TimeSlot>;
  /** An aggregated array relationship */
  time_slots_aggregate: TimeSlotAggregate;
  /** An array relationship */
  timesheets: Array<Timesheet>;
  /** An array relationship */
  timesheetsByApprovedbyid: Array<Timesheet>;
  /** An aggregated array relationship */
  timesheetsByApprovedbyid_aggregate: TimesheetAggregate;
  /** An aggregated array relationship */
  timesheets_aggregate: TimesheetAggregate;
  totalWorkHours: Scalars["numeric"];
  updatedAt: Scalars["timestamp"];
  /** An object relationship */
  user: User;
  userId: Scalars["uuid"];
  valueDate?: Maybe<Scalars["timestamp"]>;
};

/** columns and relationships of "employee" */
export type EmployeeActivitiesArgs = {
  distinct_on?: Maybe<Array<ActivitySelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ActivityOrderBy>>;
  where?: Maybe<ActivityBoolExp>;
};

/** columns and relationships of "employee" */
export type EmployeeActivitiesAggregateArgs = {
  distinct_on?: Maybe<Array<ActivitySelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ActivityOrderBy>>;
  where?: Maybe<ActivityBoolExp>;
};

/** columns and relationships of "employee" */
export type EmployeeAvailabilitySlotsArgs = {
  distinct_on?: Maybe<Array<AvailabilitySlotSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<AvailabilitySlotOrderBy>>;
  where?: Maybe<AvailabilitySlotBoolExp>;
};

/** columns and relationships of "employee" */
export type EmployeeAvailabilitySlotsAggregateArgs = {
  distinct_on?: Maybe<Array<AvailabilitySlotSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<AvailabilitySlotOrderBy>>;
  where?: Maybe<AvailabilitySlotBoolExp>;
};

/** columns and relationships of "employee" */
export type EmployeeEmployeeAppointmentsArgs = {
  distinct_on?: Maybe<Array<EmployeeAppointmentSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<EmployeeAppointmentOrderBy>>;
  where?: Maybe<EmployeeAppointmentBoolExp>;
};

/** columns and relationships of "employee" */
export type EmployeeEmployeeAppointmentsAggregateArgs = {
  distinct_on?: Maybe<Array<EmployeeAppointmentSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<EmployeeAppointmentOrderBy>>;
  where?: Maybe<EmployeeAppointmentBoolExp>;
};

/** columns and relationships of "employee" */
export type EmployeeEventTypesArgs = {
  distinct_on?: Maybe<Array<EventTypeSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<EventTypeOrderBy>>;
  where?: Maybe<EventTypeBoolExp>;
};

/** columns and relationships of "employee" */
export type EmployeeEventTypesAggregateArgs = {
  distinct_on?: Maybe<Array<EventTypeSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<EventTypeOrderBy>>;
  where?: Maybe<EventTypeBoolExp>;
};

/** columns and relationships of "employee" */
export type EmployeeTimeLogsArgs = {
  distinct_on?: Maybe<Array<TimeLogSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeLogOrderBy>>;
  where?: Maybe<TimeLogBoolExp>;
};

/** columns and relationships of "employee" */
export type EmployeeTimeLogsAggregateArgs = {
  distinct_on?: Maybe<Array<TimeLogSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeLogOrderBy>>;
  where?: Maybe<TimeLogBoolExp>;
};

/** columns and relationships of "employee" */
export type EmployeeTimeSlotsArgs = {
  distinct_on?: Maybe<Array<TimeSlotSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeSlotOrderBy>>;
  where?: Maybe<TimeSlotBoolExp>;
};

/** columns and relationships of "employee" */
export type EmployeeTimeSlotsAggregateArgs = {
  distinct_on?: Maybe<Array<TimeSlotSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeSlotOrderBy>>;
  where?: Maybe<TimeSlotBoolExp>;
};

/** columns and relationships of "employee" */
export type EmployeeTimesheetsArgs = {
  distinct_on?: Maybe<Array<TimesheetSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimesheetOrderBy>>;
  where?: Maybe<TimesheetBoolExp>;
};

/** columns and relationships of "employee" */
export type EmployeeTimesheetsByApprovedbyidArgs = {
  distinct_on?: Maybe<Array<TimesheetSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimesheetOrderBy>>;
  where?: Maybe<TimesheetBoolExp>;
};

/** columns and relationships of "employee" */
export type EmployeeTimesheetsByApprovedbyidAggregateArgs = {
  distinct_on?: Maybe<Array<TimesheetSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimesheetOrderBy>>;
  where?: Maybe<TimesheetBoolExp>;
};

/** columns and relationships of "employee" */
export type EmployeeTimesheetsAggregateArgs = {
  distinct_on?: Maybe<Array<TimesheetSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimesheetOrderBy>>;
  where?: Maybe<TimesheetBoolExp>;
};

/** aggregated selection of "employee" */
export type EmployeeAggregate = {
  __typename?: "employee_aggregate";
  aggregate?: Maybe<EmployeeAggregateFields>;
  nodes: Array<Employee>;
};

/** aggregate fields of "employee" */
export type EmployeeAggregateFields = {
  __typename?: "employee_aggregate_fields";
  avg?: Maybe<EmployeeAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<EmployeeMaxFields>;
  min?: Maybe<EmployeeMinFields>;
  stddev?: Maybe<EmployeeStddevFields>;
  stddev_pop?: Maybe<EmployeeStddevPopFields>;
  stddev_samp?: Maybe<EmployeeStddevSampFields>;
  sum?: Maybe<EmployeeSumFields>;
  var_pop?: Maybe<EmployeeVarPopFields>;
  var_samp?: Maybe<EmployeeVarSampFields>;
  variance?: Maybe<EmployeeVarianceFields>;
};

/** aggregate fields of "employee" */
export type EmployeeAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EmployeeSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "employee" */
export type EmployeeAggregateOrderBy = {
  avg?: Maybe<EmployeeAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<EmployeeMaxOrderBy>;
  min?: Maybe<EmployeeMinOrderBy>;
  stddev?: Maybe<EmployeeStddevOrderBy>;
  stddev_pop?: Maybe<EmployeeStddevPopOrderBy>;
  stddev_samp?: Maybe<EmployeeStddevSampOrderBy>;
  sum?: Maybe<EmployeeSumOrderBy>;
  var_pop?: Maybe<EmployeeVarPopOrderBy>;
  var_samp?: Maybe<EmployeeVarSampOrderBy>;
  variance?: Maybe<EmployeeVarianceOrderBy>;
};

/** columns and relationships of "employee_appointment" */
export type EmployeeAppointment = {
  __typename?: "employee_appointment";
  agenda: Scalars["String"];
  /** An array relationship */
  appointment_employees: Array<AppointmentEmployee>;
  /** An aggregated array relationship */
  appointment_employees_aggregate: AppointmentEmployeeAggregate;
  breakStartTime?: Maybe<Scalars["timestamp"]>;
  breakTimeInMins?: Maybe<Scalars["Int"]>;
  bufferTimeEnd?: Maybe<Scalars["Boolean"]>;
  bufferTimeInMins?: Maybe<Scalars["Int"]>;
  bufferTimeStart?: Maybe<Scalars["Boolean"]>;
  createdAt: Scalars["timestamp"];
  description?: Maybe<Scalars["String"]>;
  emails?: Maybe<Scalars["String"]>;
  /** An object relationship */
  employee?: Maybe<Employee>;
  employeeId?: Maybe<Scalars["uuid"]>;
  endDateTime: Scalars["timestamp"];
  id: Scalars["uuid"];
  location?: Maybe<Scalars["String"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  startDateTime: Scalars["timestamp"];
  status?: Maybe<Scalars["String"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt: Scalars["timestamp"];
};

/** columns and relationships of "employee_appointment" */
export type EmployeeAppointmentAppointmentEmployeesArgs = {
  distinct_on?: Maybe<Array<AppointmentEmployeeSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<AppointmentEmployeeOrderBy>>;
  where?: Maybe<AppointmentEmployeeBoolExp>;
};

/** columns and relationships of "employee_appointment" */
export type EmployeeAppointmentAppointmentEmployeesAggregateArgs = {
  distinct_on?: Maybe<Array<AppointmentEmployeeSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<AppointmentEmployeeOrderBy>>;
  where?: Maybe<AppointmentEmployeeBoolExp>;
};

/** aggregated selection of "employee_appointment" */
export type EmployeeAppointmentAggregate = {
  __typename?: "employee_appointment_aggregate";
  aggregate?: Maybe<EmployeeAppointmentAggregateFields>;
  nodes: Array<EmployeeAppointment>;
};

/** aggregate fields of "employee_appointment" */
export type EmployeeAppointmentAggregateFields = {
  __typename?: "employee_appointment_aggregate_fields";
  avg?: Maybe<EmployeeAppointmentAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<EmployeeAppointmentMaxFields>;
  min?: Maybe<EmployeeAppointmentMinFields>;
  stddev?: Maybe<EmployeeAppointmentStddevFields>;
  stddev_pop?: Maybe<EmployeeAppointmentStddevPopFields>;
  stddev_samp?: Maybe<EmployeeAppointmentStddevSampFields>;
  sum?: Maybe<EmployeeAppointmentSumFields>;
  var_pop?: Maybe<EmployeeAppointmentVarPopFields>;
  var_samp?: Maybe<EmployeeAppointmentVarSampFields>;
  variance?: Maybe<EmployeeAppointmentVarianceFields>;
};

/** aggregate fields of "employee_appointment" */
export type EmployeeAppointmentAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EmployeeAppointmentSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "employee_appointment" */
export type EmployeeAppointmentAggregateOrderBy = {
  avg?: Maybe<EmployeeAppointmentAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<EmployeeAppointmentMaxOrderBy>;
  min?: Maybe<EmployeeAppointmentMinOrderBy>;
  stddev?: Maybe<EmployeeAppointmentStddevOrderBy>;
  stddev_pop?: Maybe<EmployeeAppointmentStddevPopOrderBy>;
  stddev_samp?: Maybe<EmployeeAppointmentStddevSampOrderBy>;
  sum?: Maybe<EmployeeAppointmentSumOrderBy>;
  var_pop?: Maybe<EmployeeAppointmentVarPopOrderBy>;
  var_samp?: Maybe<EmployeeAppointmentVarSampOrderBy>;
  variance?: Maybe<EmployeeAppointmentVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "employee_appointment" */
export type EmployeeAppointmentArrRelInsertInput = {
  data: Array<EmployeeAppointmentInsertInput>;
  on_conflict?: Maybe<EmployeeAppointmentOnConflict>;
};

/** aggregate avg on columns */
export type EmployeeAppointmentAvgFields = {
  __typename?: "employee_appointment_avg_fields";
  breakTimeInMins?: Maybe<Scalars["Float"]>;
  bufferTimeInMins?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "employee_appointment" */
export type EmployeeAppointmentAvgOrderBy = {
  breakTimeInMins?: Maybe<OrderBy>;
  bufferTimeInMins?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "employee_appointment". All fields are combined with a logical 'AND'. */
export type EmployeeAppointmentBoolExp = {
  _and?: Maybe<Array<Maybe<EmployeeAppointmentBoolExp>>>;
  _not?: Maybe<EmployeeAppointmentBoolExp>;
  _or?: Maybe<Array<Maybe<EmployeeAppointmentBoolExp>>>;
  agenda?: Maybe<StringComparisonExp>;
  appointment_employees?: Maybe<AppointmentEmployeeBoolExp>;
  breakStartTime?: Maybe<TimestampComparisonExp>;
  breakTimeInMins?: Maybe<IntComparisonExp>;
  bufferTimeEnd?: Maybe<BooleanComparisonExp>;
  bufferTimeInMins?: Maybe<IntComparisonExp>;
  bufferTimeStart?: Maybe<BooleanComparisonExp>;
  createdAt?: Maybe<TimestampComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  emails?: Maybe<StringComparisonExp>;
  employee?: Maybe<EmployeeBoolExp>;
  employeeId?: Maybe<UuidComparisonExp>;
  endDateTime?: Maybe<TimestampComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  location?: Maybe<StringComparisonExp>;
  organizationId?: Maybe<UuidComparisonExp>;
  startDateTime?: Maybe<TimestampComparisonExp>;
  status?: Maybe<StringComparisonExp>;
  tenantId?: Maybe<UuidComparisonExp>;
  updatedAt?: Maybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "employee_appointment" */
export enum EmployeeAppointmentConstraint {
  /** unique or primary key constraint */
  Pk_0cffa7fe7917dce7981f126e8bc = "PK_0cffa7fe7917dce7981f126e8bc"
}

/** input type for incrementing integer column in table "employee_appointment" */
export type EmployeeAppointmentIncInput = {
  breakTimeInMins?: Maybe<Scalars["Int"]>;
  bufferTimeInMins?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "employee_appointment" */
export type EmployeeAppointmentInsertInput = {
  agenda?: Maybe<Scalars["String"]>;
  appointment_employees?: Maybe<AppointmentEmployeeArrRelInsertInput>;
  breakStartTime?: Maybe<Scalars["timestamp"]>;
  breakTimeInMins?: Maybe<Scalars["Int"]>;
  bufferTimeEnd?: Maybe<Scalars["Boolean"]>;
  bufferTimeInMins?: Maybe<Scalars["Int"]>;
  bufferTimeStart?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  emails?: Maybe<Scalars["String"]>;
  employee?: Maybe<EmployeeObjRelInsertInput>;
  employeeId?: Maybe<Scalars["uuid"]>;
  endDateTime?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  location?: Maybe<Scalars["String"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  startDateTime?: Maybe<Scalars["timestamp"]>;
  status?: Maybe<Scalars["String"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate max on columns */
export type EmployeeAppointmentMaxFields = {
  __typename?: "employee_appointment_max_fields";
  agenda?: Maybe<Scalars["String"]>;
  breakStartTime?: Maybe<Scalars["timestamp"]>;
  breakTimeInMins?: Maybe<Scalars["Int"]>;
  bufferTimeInMins?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  emails?: Maybe<Scalars["String"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  endDateTime?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  location?: Maybe<Scalars["String"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  startDateTime?: Maybe<Scalars["timestamp"]>;
  status?: Maybe<Scalars["String"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by max() on columns of table "employee_appointment" */
export type EmployeeAppointmentMaxOrderBy = {
  agenda?: Maybe<OrderBy>;
  breakStartTime?: Maybe<OrderBy>;
  breakTimeInMins?: Maybe<OrderBy>;
  bufferTimeInMins?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  emails?: Maybe<OrderBy>;
  employeeId?: Maybe<OrderBy>;
  endDateTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  location?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  startDateTime?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EmployeeAppointmentMinFields = {
  __typename?: "employee_appointment_min_fields";
  agenda?: Maybe<Scalars["String"]>;
  breakStartTime?: Maybe<Scalars["timestamp"]>;
  breakTimeInMins?: Maybe<Scalars["Int"]>;
  bufferTimeInMins?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  emails?: Maybe<Scalars["String"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  endDateTime?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  location?: Maybe<Scalars["String"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  startDateTime?: Maybe<Scalars["timestamp"]>;
  status?: Maybe<Scalars["String"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by min() on columns of table "employee_appointment" */
export type EmployeeAppointmentMinOrderBy = {
  agenda?: Maybe<OrderBy>;
  breakStartTime?: Maybe<OrderBy>;
  breakTimeInMins?: Maybe<OrderBy>;
  bufferTimeInMins?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  emails?: Maybe<OrderBy>;
  employeeId?: Maybe<OrderBy>;
  endDateTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  location?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  startDateTime?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** response of any mutation on the table "employee_appointment" */
export type EmployeeAppointmentMutationResponse = {
  __typename?: "employee_appointment_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<EmployeeAppointment>;
};

/** input type for inserting object relation for remote table "employee_appointment" */
export type EmployeeAppointmentObjRelInsertInput = {
  data: EmployeeAppointmentInsertInput;
  on_conflict?: Maybe<EmployeeAppointmentOnConflict>;
};

/** on conflict condition type for table "employee_appointment" */
export type EmployeeAppointmentOnConflict = {
  constraint: EmployeeAppointmentConstraint;
  update_columns: Array<EmployeeAppointmentUpdateColumn>;
  where?: Maybe<EmployeeAppointmentBoolExp>;
};

/** ordering options when selecting data from "employee_appointment" */
export type EmployeeAppointmentOrderBy = {
  agenda?: Maybe<OrderBy>;
  appointment_employees_aggregate?: Maybe<AppointmentEmployeeAggregateOrderBy>;
  breakStartTime?: Maybe<OrderBy>;
  breakTimeInMins?: Maybe<OrderBy>;
  bufferTimeEnd?: Maybe<OrderBy>;
  bufferTimeInMins?: Maybe<OrderBy>;
  bufferTimeStart?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  emails?: Maybe<OrderBy>;
  employee?: Maybe<EmployeeOrderBy>;
  employeeId?: Maybe<OrderBy>;
  endDateTime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  location?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  startDateTime?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: "employee_appointment" */
export type EmployeeAppointmentPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "employee_appointment" */
export enum EmployeeAppointmentSelectColumn {
  /** column name */
  Agenda = "agenda",
  /** column name */
  BreakStartTime = "breakStartTime",
  /** column name */
  BreakTimeInMins = "breakTimeInMins",
  /** column name */
  BufferTimeEnd = "bufferTimeEnd",
  /** column name */
  BufferTimeInMins = "bufferTimeInMins",
  /** column name */
  BufferTimeStart = "bufferTimeStart",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Description = "description",
  /** column name */
  Emails = "emails",
  /** column name */
  EmployeeId = "employeeId",
  /** column name */
  EndDateTime = "endDateTime",
  /** column name */
  Id = "id",
  /** column name */
  Location = "location",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  StartDateTime = "startDateTime",
  /** column name */
  Status = "status",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** input type for updating data in table "employee_appointment" */
export type EmployeeAppointmentSetInput = {
  agenda?: Maybe<Scalars["String"]>;
  breakStartTime?: Maybe<Scalars["timestamp"]>;
  breakTimeInMins?: Maybe<Scalars["Int"]>;
  bufferTimeEnd?: Maybe<Scalars["Boolean"]>;
  bufferTimeInMins?: Maybe<Scalars["Int"]>;
  bufferTimeStart?: Maybe<Scalars["Boolean"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  emails?: Maybe<Scalars["String"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  endDateTime?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  location?: Maybe<Scalars["String"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  startDateTime?: Maybe<Scalars["timestamp"]>;
  status?: Maybe<Scalars["String"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate stddev on columns */
export type EmployeeAppointmentStddevFields = {
  __typename?: "employee_appointment_stddev_fields";
  breakTimeInMins?: Maybe<Scalars["Float"]>;
  bufferTimeInMins?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "employee_appointment" */
export type EmployeeAppointmentStddevOrderBy = {
  breakTimeInMins?: Maybe<OrderBy>;
  bufferTimeInMins?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type EmployeeAppointmentStddevPopFields = {
  __typename?: "employee_appointment_stddev_pop_fields";
  breakTimeInMins?: Maybe<Scalars["Float"]>;
  bufferTimeInMins?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "employee_appointment" */
export type EmployeeAppointmentStddevPopOrderBy = {
  breakTimeInMins?: Maybe<OrderBy>;
  bufferTimeInMins?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type EmployeeAppointmentStddevSampFields = {
  __typename?: "employee_appointment_stddev_samp_fields";
  breakTimeInMins?: Maybe<Scalars["Float"]>;
  bufferTimeInMins?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "employee_appointment" */
export type EmployeeAppointmentStddevSampOrderBy = {
  breakTimeInMins?: Maybe<OrderBy>;
  bufferTimeInMins?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type EmployeeAppointmentSumFields = {
  __typename?: "employee_appointment_sum_fields";
  breakTimeInMins?: Maybe<Scalars["Int"]>;
  bufferTimeInMins?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "employee_appointment" */
export type EmployeeAppointmentSumOrderBy = {
  breakTimeInMins?: Maybe<OrderBy>;
  bufferTimeInMins?: Maybe<OrderBy>;
};

/** update columns of table "employee_appointment" */
export enum EmployeeAppointmentUpdateColumn {
  /** column name */
  Agenda = "agenda",
  /** column name */
  BreakStartTime = "breakStartTime",
  /** column name */
  BreakTimeInMins = "breakTimeInMins",
  /** column name */
  BufferTimeEnd = "bufferTimeEnd",
  /** column name */
  BufferTimeInMins = "bufferTimeInMins",
  /** column name */
  BufferTimeStart = "bufferTimeStart",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Description = "description",
  /** column name */
  Emails = "emails",
  /** column name */
  EmployeeId = "employeeId",
  /** column name */
  EndDateTime = "endDateTime",
  /** column name */
  Id = "id",
  /** column name */
  Location = "location",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  StartDateTime = "startDateTime",
  /** column name */
  Status = "status",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** aggregate var_pop on columns */
export type EmployeeAppointmentVarPopFields = {
  __typename?: "employee_appointment_var_pop_fields";
  breakTimeInMins?: Maybe<Scalars["Float"]>;
  bufferTimeInMins?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "employee_appointment" */
export type EmployeeAppointmentVarPopOrderBy = {
  breakTimeInMins?: Maybe<OrderBy>;
  bufferTimeInMins?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type EmployeeAppointmentVarSampFields = {
  __typename?: "employee_appointment_var_samp_fields";
  breakTimeInMins?: Maybe<Scalars["Float"]>;
  bufferTimeInMins?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "employee_appointment" */
export type EmployeeAppointmentVarSampOrderBy = {
  breakTimeInMins?: Maybe<OrderBy>;
  bufferTimeInMins?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type EmployeeAppointmentVarianceFields = {
  __typename?: "employee_appointment_variance_fields";
  breakTimeInMins?: Maybe<Scalars["Float"]>;
  bufferTimeInMins?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "employee_appointment" */
export type EmployeeAppointmentVarianceOrderBy = {
  breakTimeInMins?: Maybe<OrderBy>;
  bufferTimeInMins?: Maybe<OrderBy>;
};

/** input type for inserting array relation for remote table "employee" */
export type EmployeeArrRelInsertInput = {
  data: Array<EmployeeInsertInput>;
  on_conflict?: Maybe<EmployeeOnConflict>;
};

/** aggregate avg on columns */
export type EmployeeAvgFields = {
  __typename?: "employee_avg_fields";
  averageBonus?: Maybe<Scalars["Float"]>;
  averageExpenses?: Maybe<Scalars["Float"]>;
  averageIncome?: Maybe<Scalars["Float"]>;
  billRateValue?: Maybe<Scalars["Float"]>;
  reWeeklyLimit?: Maybe<Scalars["Float"]>;
  totalWorkHours?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "employee" */
export type EmployeeAvgOrderBy = {
  averageBonus?: Maybe<OrderBy>;
  averageExpenses?: Maybe<OrderBy>;
  averageIncome?: Maybe<OrderBy>;
  billRateValue?: Maybe<OrderBy>;
  reWeeklyLimit?: Maybe<OrderBy>;
  totalWorkHours?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "employee". All fields are combined with a logical 'AND'. */
export type EmployeeBoolExp = {
  _and?: Maybe<Array<Maybe<EmployeeBoolExp>>>;
  _not?: Maybe<EmployeeBoolExp>;
  _or?: Maybe<Array<Maybe<EmployeeBoolExp>>>;
  acceptDate?: Maybe<TimestampComparisonExp>;
  activities?: Maybe<ActivityBoolExp>;
  anonymousBonus?: Maybe<BooleanComparisonExp>;
  availability_slots?: Maybe<AvailabilitySlotBoolExp>;
  averageBonus?: Maybe<NumericComparisonExp>;
  averageExpenses?: Maybe<NumericComparisonExp>;
  averageIncome?: Maybe<NumericComparisonExp>;
  billRateCurrency?: Maybe<StringComparisonExp>;
  billRateValue?: Maybe<NumericComparisonExp>;
  contact?: Maybe<ContactBoolExp>;
  contactId?: Maybe<UuidComparisonExp>;
  createdAt?: Maybe<TimestampComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  employeeLevel?: Maybe<StringComparisonExp>;
  employee_appointments?: Maybe<EmployeeAppointmentBoolExp>;
  endWork?: Maybe<TimestampComparisonExp>;
  event_types?: Maybe<EventTypeBoolExp>;
  id?: Maybe<UuidComparisonExp>;
  isActive?: Maybe<BooleanComparisonExp>;
  offerDate?: Maybe<TimestampComparisonExp>;
  organizationId?: Maybe<UuidComparisonExp>;
  organizationPositionId?: Maybe<UuidComparisonExp>;
  payPeriod?: Maybe<StringComparisonExp>;
  reWeeklyLimit?: Maybe<IntComparisonExp>;
  rejectDate?: Maybe<TimestampComparisonExp>;
  short_description?: Maybe<StringComparisonExp>;
  show_anonymous_bonus?: Maybe<BooleanComparisonExp>;
  show_average_bonus?: Maybe<BooleanComparisonExp>;
  show_average_expenses?: Maybe<BooleanComparisonExp>;
  show_average_income?: Maybe<BooleanComparisonExp>;
  show_billrate?: Maybe<BooleanComparisonExp>;
  show_payperiod?: Maybe<BooleanComparisonExp>;
  show_start_work_on?: Maybe<BooleanComparisonExp>;
  startedWorkOn?: Maybe<TimestampComparisonExp>;
  tenantId?: Maybe<UuidComparisonExp>;
  time_logs?: Maybe<TimeLogBoolExp>;
  time_slots?: Maybe<TimeSlotBoolExp>;
  timesheets?: Maybe<TimesheetBoolExp>;
  timesheetsByApprovedbyid?: Maybe<TimesheetBoolExp>;
  totalWorkHours?: Maybe<NumericComparisonExp>;
  updatedAt?: Maybe<TimestampComparisonExp>;
  user?: Maybe<UserBoolExp>;
  userId?: Maybe<UuidComparisonExp>;
  valueDate?: Maybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "employee" */
export enum EmployeeConstraint {
  /** unique or primary key constraint */
  Pk_3c2bc72f03fd5abbbc5ac169498 = "PK_3c2bc72f03fd5abbbc5ac169498",
  /** unique or primary key constraint */
  RelF4b0d329c4a3cf79ffe9d56504 = "REL_f4b0d329c4a3cf79ffe9d56504"
}

/** input type for incrementing integer column in table "employee" */
export type EmployeeIncInput = {
  averageBonus?: Maybe<Scalars["numeric"]>;
  averageExpenses?: Maybe<Scalars["numeric"]>;
  averageIncome?: Maybe<Scalars["numeric"]>;
  billRateValue?: Maybe<Scalars["numeric"]>;
  reWeeklyLimit?: Maybe<Scalars["Int"]>;
  totalWorkHours?: Maybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "employee" */
export type EmployeeInsertInput = {
  acceptDate?: Maybe<Scalars["timestamp"]>;
  activities?: Maybe<ActivityArrRelInsertInput>;
  anonymousBonus?: Maybe<Scalars["Boolean"]>;
  availability_slots?: Maybe<AvailabilitySlotArrRelInsertInput>;
  averageBonus?: Maybe<Scalars["numeric"]>;
  averageExpenses?: Maybe<Scalars["numeric"]>;
  averageIncome?: Maybe<Scalars["numeric"]>;
  billRateCurrency?: Maybe<Scalars["String"]>;
  billRateValue?: Maybe<Scalars["numeric"]>;
  contact?: Maybe<ContactObjRelInsertInput>;
  contactId?: Maybe<Scalars["uuid"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  employeeLevel?: Maybe<Scalars["String"]>;
  employee_appointments?: Maybe<EmployeeAppointmentArrRelInsertInput>;
  endWork?: Maybe<Scalars["timestamp"]>;
  event_types?: Maybe<EventTypeArrRelInsertInput>;
  id?: Maybe<Scalars["uuid"]>;
  isActive?: Maybe<Scalars["Boolean"]>;
  offerDate?: Maybe<Scalars["timestamp"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  organizationPositionId?: Maybe<Scalars["uuid"]>;
  payPeriod?: Maybe<Scalars["String"]>;
  reWeeklyLimit?: Maybe<Scalars["Int"]>;
  rejectDate?: Maybe<Scalars["timestamp"]>;
  short_description?: Maybe<Scalars["String"]>;
  show_anonymous_bonus?: Maybe<Scalars["Boolean"]>;
  show_average_bonus?: Maybe<Scalars["Boolean"]>;
  show_average_expenses?: Maybe<Scalars["Boolean"]>;
  show_average_income?: Maybe<Scalars["Boolean"]>;
  show_billrate?: Maybe<Scalars["Boolean"]>;
  show_payperiod?: Maybe<Scalars["Boolean"]>;
  show_start_work_on?: Maybe<Scalars["Boolean"]>;
  startedWorkOn?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  time_logs?: Maybe<TimeLogArrRelInsertInput>;
  time_slots?: Maybe<TimeSlotArrRelInsertInput>;
  timesheets?: Maybe<TimesheetArrRelInsertInput>;
  timesheetsByApprovedbyid?: Maybe<TimesheetArrRelInsertInput>;
  totalWorkHours?: Maybe<Scalars["numeric"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
  user?: Maybe<UserObjRelInsertInput>;
  userId?: Maybe<Scalars["uuid"]>;
  valueDate?: Maybe<Scalars["timestamp"]>;
};

/** aggregate max on columns */
export type EmployeeMaxFields = {
  __typename?: "employee_max_fields";
  acceptDate?: Maybe<Scalars["timestamp"]>;
  averageBonus?: Maybe<Scalars["numeric"]>;
  averageExpenses?: Maybe<Scalars["numeric"]>;
  averageIncome?: Maybe<Scalars["numeric"]>;
  billRateCurrency?: Maybe<Scalars["String"]>;
  billRateValue?: Maybe<Scalars["numeric"]>;
  contactId?: Maybe<Scalars["uuid"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  employeeLevel?: Maybe<Scalars["String"]>;
  endWork?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  offerDate?: Maybe<Scalars["timestamp"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  organizationPositionId?: Maybe<Scalars["uuid"]>;
  payPeriod?: Maybe<Scalars["String"]>;
  reWeeklyLimit?: Maybe<Scalars["Int"]>;
  rejectDate?: Maybe<Scalars["timestamp"]>;
  short_description?: Maybe<Scalars["String"]>;
  startedWorkOn?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  totalWorkHours?: Maybe<Scalars["numeric"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
  userId?: Maybe<Scalars["uuid"]>;
  valueDate?: Maybe<Scalars["timestamp"]>;
};

/** order by max() on columns of table "employee" */
export type EmployeeMaxOrderBy = {
  acceptDate?: Maybe<OrderBy>;
  averageBonus?: Maybe<OrderBy>;
  averageExpenses?: Maybe<OrderBy>;
  averageIncome?: Maybe<OrderBy>;
  billRateCurrency?: Maybe<OrderBy>;
  billRateValue?: Maybe<OrderBy>;
  contactId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  employeeLevel?: Maybe<OrderBy>;
  endWork?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  offerDate?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  organizationPositionId?: Maybe<OrderBy>;
  payPeriod?: Maybe<OrderBy>;
  reWeeklyLimit?: Maybe<OrderBy>;
  rejectDate?: Maybe<OrderBy>;
  short_description?: Maybe<OrderBy>;
  startedWorkOn?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  totalWorkHours?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
  valueDate?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EmployeeMinFields = {
  __typename?: "employee_min_fields";
  acceptDate?: Maybe<Scalars["timestamp"]>;
  averageBonus?: Maybe<Scalars["numeric"]>;
  averageExpenses?: Maybe<Scalars["numeric"]>;
  averageIncome?: Maybe<Scalars["numeric"]>;
  billRateCurrency?: Maybe<Scalars["String"]>;
  billRateValue?: Maybe<Scalars["numeric"]>;
  contactId?: Maybe<Scalars["uuid"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  employeeLevel?: Maybe<Scalars["String"]>;
  endWork?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  offerDate?: Maybe<Scalars["timestamp"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  organizationPositionId?: Maybe<Scalars["uuid"]>;
  payPeriod?: Maybe<Scalars["String"]>;
  reWeeklyLimit?: Maybe<Scalars["Int"]>;
  rejectDate?: Maybe<Scalars["timestamp"]>;
  short_description?: Maybe<Scalars["String"]>;
  startedWorkOn?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  totalWorkHours?: Maybe<Scalars["numeric"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
  userId?: Maybe<Scalars["uuid"]>;
  valueDate?: Maybe<Scalars["timestamp"]>;
};

/** order by min() on columns of table "employee" */
export type EmployeeMinOrderBy = {
  acceptDate?: Maybe<OrderBy>;
  averageBonus?: Maybe<OrderBy>;
  averageExpenses?: Maybe<OrderBy>;
  averageIncome?: Maybe<OrderBy>;
  billRateCurrency?: Maybe<OrderBy>;
  billRateValue?: Maybe<OrderBy>;
  contactId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  employeeLevel?: Maybe<OrderBy>;
  endWork?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  offerDate?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  organizationPositionId?: Maybe<OrderBy>;
  payPeriod?: Maybe<OrderBy>;
  reWeeklyLimit?: Maybe<OrderBy>;
  rejectDate?: Maybe<OrderBy>;
  short_description?: Maybe<OrderBy>;
  startedWorkOn?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  totalWorkHours?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  userId?: Maybe<OrderBy>;
  valueDate?: Maybe<OrderBy>;
};

/** response of any mutation on the table "employee" */
export type EmployeeMutationResponse = {
  __typename?: "employee_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Employee>;
};

/** input type for inserting object relation for remote table "employee" */
export type EmployeeObjRelInsertInput = {
  data: EmployeeInsertInput;
  on_conflict?: Maybe<EmployeeOnConflict>;
};

/** on conflict condition type for table "employee" */
export type EmployeeOnConflict = {
  constraint: EmployeeConstraint;
  update_columns: Array<EmployeeUpdateColumn>;
  where?: Maybe<EmployeeBoolExp>;
};

/** ordering options when selecting data from "employee" */
export type EmployeeOrderBy = {
  acceptDate?: Maybe<OrderBy>;
  activities_aggregate?: Maybe<ActivityAggregateOrderBy>;
  anonymousBonus?: Maybe<OrderBy>;
  availability_slots_aggregate?: Maybe<AvailabilitySlotAggregateOrderBy>;
  averageBonus?: Maybe<OrderBy>;
  averageExpenses?: Maybe<OrderBy>;
  averageIncome?: Maybe<OrderBy>;
  billRateCurrency?: Maybe<OrderBy>;
  billRateValue?: Maybe<OrderBy>;
  contact?: Maybe<ContactOrderBy>;
  contactId?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  employeeLevel?: Maybe<OrderBy>;
  employee_appointments_aggregate?: Maybe<EmployeeAppointmentAggregateOrderBy>;
  endWork?: Maybe<OrderBy>;
  event_types_aggregate?: Maybe<EventTypeAggregateOrderBy>;
  id?: Maybe<OrderBy>;
  isActive?: Maybe<OrderBy>;
  offerDate?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  organizationPositionId?: Maybe<OrderBy>;
  payPeriod?: Maybe<OrderBy>;
  reWeeklyLimit?: Maybe<OrderBy>;
  rejectDate?: Maybe<OrderBy>;
  short_description?: Maybe<OrderBy>;
  show_anonymous_bonus?: Maybe<OrderBy>;
  show_average_bonus?: Maybe<OrderBy>;
  show_average_expenses?: Maybe<OrderBy>;
  show_average_income?: Maybe<OrderBy>;
  show_billrate?: Maybe<OrderBy>;
  show_payperiod?: Maybe<OrderBy>;
  show_start_work_on?: Maybe<OrderBy>;
  startedWorkOn?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  time_logs_aggregate?: Maybe<TimeLogAggregateOrderBy>;
  time_slots_aggregate?: Maybe<TimeSlotAggregateOrderBy>;
  timesheetsByApprovedbyid_aggregate?: Maybe<TimesheetAggregateOrderBy>;
  timesheets_aggregate?: Maybe<TimesheetAggregateOrderBy>;
  totalWorkHours?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  user?: Maybe<UserOrderBy>;
  userId?: Maybe<OrderBy>;
  valueDate?: Maybe<OrderBy>;
};

/** primary key columns input for table: "employee" */
export type EmployeePkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "employee" */
export enum EmployeeSelectColumn {
  /** column name */
  AcceptDate = "acceptDate",
  /** column name */
  AnonymousBonus = "anonymousBonus",
  /** column name */
  AverageBonus = "averageBonus",
  /** column name */
  AverageExpenses = "averageExpenses",
  /** column name */
  AverageIncome = "averageIncome",
  /** column name */
  BillRateCurrency = "billRateCurrency",
  /** column name */
  BillRateValue = "billRateValue",
  /** column name */
  ContactId = "contactId",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Description = "description",
  /** column name */
  EmployeeLevel = "employeeLevel",
  /** column name */
  EndWork = "endWork",
  /** column name */
  Id = "id",
  /** column name */
  IsActive = "isActive",
  /** column name */
  OfferDate = "offerDate",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  OrganizationPositionId = "organizationPositionId",
  /** column name */
  PayPeriod = "payPeriod",
  /** column name */
  ReWeeklyLimit = "reWeeklyLimit",
  /** column name */
  RejectDate = "rejectDate",
  /** column name */
  ShortDescription = "short_description",
  /** column name */
  ShowAnonymousBonus = "show_anonymous_bonus",
  /** column name */
  ShowAverageBonus = "show_average_bonus",
  /** column name */
  ShowAverageExpenses = "show_average_expenses",
  /** column name */
  ShowAverageIncome = "show_average_income",
  /** column name */
  ShowBillrate = "show_billrate",
  /** column name */
  ShowPayperiod = "show_payperiod",
  /** column name */
  ShowStartWorkOn = "show_start_work_on",
  /** column name */
  StartedWorkOn = "startedWorkOn",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  TotalWorkHours = "totalWorkHours",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UserId = "userId",
  /** column name */
  ValueDate = "valueDate"
}

/** input type for updating data in table "employee" */
export type EmployeeSetInput = {
  acceptDate?: Maybe<Scalars["timestamp"]>;
  anonymousBonus?: Maybe<Scalars["Boolean"]>;
  averageBonus?: Maybe<Scalars["numeric"]>;
  averageExpenses?: Maybe<Scalars["numeric"]>;
  averageIncome?: Maybe<Scalars["numeric"]>;
  billRateCurrency?: Maybe<Scalars["String"]>;
  billRateValue?: Maybe<Scalars["numeric"]>;
  contactId?: Maybe<Scalars["uuid"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  employeeLevel?: Maybe<Scalars["String"]>;
  endWork?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  isActive?: Maybe<Scalars["Boolean"]>;
  offerDate?: Maybe<Scalars["timestamp"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  organizationPositionId?: Maybe<Scalars["uuid"]>;
  payPeriod?: Maybe<Scalars["String"]>;
  reWeeklyLimit?: Maybe<Scalars["Int"]>;
  rejectDate?: Maybe<Scalars["timestamp"]>;
  short_description?: Maybe<Scalars["String"]>;
  show_anonymous_bonus?: Maybe<Scalars["Boolean"]>;
  show_average_bonus?: Maybe<Scalars["Boolean"]>;
  show_average_expenses?: Maybe<Scalars["Boolean"]>;
  show_average_income?: Maybe<Scalars["Boolean"]>;
  show_billrate?: Maybe<Scalars["Boolean"]>;
  show_payperiod?: Maybe<Scalars["Boolean"]>;
  show_start_work_on?: Maybe<Scalars["Boolean"]>;
  startedWorkOn?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  totalWorkHours?: Maybe<Scalars["numeric"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
  userId?: Maybe<Scalars["uuid"]>;
  valueDate?: Maybe<Scalars["timestamp"]>;
};

/** aggregate stddev on columns */
export type EmployeeStddevFields = {
  __typename?: "employee_stddev_fields";
  averageBonus?: Maybe<Scalars["Float"]>;
  averageExpenses?: Maybe<Scalars["Float"]>;
  averageIncome?: Maybe<Scalars["Float"]>;
  billRateValue?: Maybe<Scalars["Float"]>;
  reWeeklyLimit?: Maybe<Scalars["Float"]>;
  totalWorkHours?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "employee" */
export type EmployeeStddevOrderBy = {
  averageBonus?: Maybe<OrderBy>;
  averageExpenses?: Maybe<OrderBy>;
  averageIncome?: Maybe<OrderBy>;
  billRateValue?: Maybe<OrderBy>;
  reWeeklyLimit?: Maybe<OrderBy>;
  totalWorkHours?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type EmployeeStddevPopFields = {
  __typename?: "employee_stddev_pop_fields";
  averageBonus?: Maybe<Scalars["Float"]>;
  averageExpenses?: Maybe<Scalars["Float"]>;
  averageIncome?: Maybe<Scalars["Float"]>;
  billRateValue?: Maybe<Scalars["Float"]>;
  reWeeklyLimit?: Maybe<Scalars["Float"]>;
  totalWorkHours?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "employee" */
export type EmployeeStddevPopOrderBy = {
  averageBonus?: Maybe<OrderBy>;
  averageExpenses?: Maybe<OrderBy>;
  averageIncome?: Maybe<OrderBy>;
  billRateValue?: Maybe<OrderBy>;
  reWeeklyLimit?: Maybe<OrderBy>;
  totalWorkHours?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type EmployeeStddevSampFields = {
  __typename?: "employee_stddev_samp_fields";
  averageBonus?: Maybe<Scalars["Float"]>;
  averageExpenses?: Maybe<Scalars["Float"]>;
  averageIncome?: Maybe<Scalars["Float"]>;
  billRateValue?: Maybe<Scalars["Float"]>;
  reWeeklyLimit?: Maybe<Scalars["Float"]>;
  totalWorkHours?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "employee" */
export type EmployeeStddevSampOrderBy = {
  averageBonus?: Maybe<OrderBy>;
  averageExpenses?: Maybe<OrderBy>;
  averageIncome?: Maybe<OrderBy>;
  billRateValue?: Maybe<OrderBy>;
  reWeeklyLimit?: Maybe<OrderBy>;
  totalWorkHours?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type EmployeeSumFields = {
  __typename?: "employee_sum_fields";
  averageBonus?: Maybe<Scalars["numeric"]>;
  averageExpenses?: Maybe<Scalars["numeric"]>;
  averageIncome?: Maybe<Scalars["numeric"]>;
  billRateValue?: Maybe<Scalars["numeric"]>;
  reWeeklyLimit?: Maybe<Scalars["Int"]>;
  totalWorkHours?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "employee" */
export type EmployeeSumOrderBy = {
  averageBonus?: Maybe<OrderBy>;
  averageExpenses?: Maybe<OrderBy>;
  averageIncome?: Maybe<OrderBy>;
  billRateValue?: Maybe<OrderBy>;
  reWeeklyLimit?: Maybe<OrderBy>;
  totalWorkHours?: Maybe<OrderBy>;
};

/** update columns of table "employee" */
export enum EmployeeUpdateColumn {
  /** column name */
  AcceptDate = "acceptDate",
  /** column name */
  AnonymousBonus = "anonymousBonus",
  /** column name */
  AverageBonus = "averageBonus",
  /** column name */
  AverageExpenses = "averageExpenses",
  /** column name */
  AverageIncome = "averageIncome",
  /** column name */
  BillRateCurrency = "billRateCurrency",
  /** column name */
  BillRateValue = "billRateValue",
  /** column name */
  ContactId = "contactId",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Description = "description",
  /** column name */
  EmployeeLevel = "employeeLevel",
  /** column name */
  EndWork = "endWork",
  /** column name */
  Id = "id",
  /** column name */
  IsActive = "isActive",
  /** column name */
  OfferDate = "offerDate",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  OrganizationPositionId = "organizationPositionId",
  /** column name */
  PayPeriod = "payPeriod",
  /** column name */
  ReWeeklyLimit = "reWeeklyLimit",
  /** column name */
  RejectDate = "rejectDate",
  /** column name */
  ShortDescription = "short_description",
  /** column name */
  ShowAnonymousBonus = "show_anonymous_bonus",
  /** column name */
  ShowAverageBonus = "show_average_bonus",
  /** column name */
  ShowAverageExpenses = "show_average_expenses",
  /** column name */
  ShowAverageIncome = "show_average_income",
  /** column name */
  ShowBillrate = "show_billrate",
  /** column name */
  ShowPayperiod = "show_payperiod",
  /** column name */
  ShowStartWorkOn = "show_start_work_on",
  /** column name */
  StartedWorkOn = "startedWorkOn",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  TotalWorkHours = "totalWorkHours",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UserId = "userId",
  /** column name */
  ValueDate = "valueDate"
}

/** aggregate var_pop on columns */
export type EmployeeVarPopFields = {
  __typename?: "employee_var_pop_fields";
  averageBonus?: Maybe<Scalars["Float"]>;
  averageExpenses?: Maybe<Scalars["Float"]>;
  averageIncome?: Maybe<Scalars["Float"]>;
  billRateValue?: Maybe<Scalars["Float"]>;
  reWeeklyLimit?: Maybe<Scalars["Float"]>;
  totalWorkHours?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "employee" */
export type EmployeeVarPopOrderBy = {
  averageBonus?: Maybe<OrderBy>;
  averageExpenses?: Maybe<OrderBy>;
  averageIncome?: Maybe<OrderBy>;
  billRateValue?: Maybe<OrderBy>;
  reWeeklyLimit?: Maybe<OrderBy>;
  totalWorkHours?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type EmployeeVarSampFields = {
  __typename?: "employee_var_samp_fields";
  averageBonus?: Maybe<Scalars["Float"]>;
  averageExpenses?: Maybe<Scalars["Float"]>;
  averageIncome?: Maybe<Scalars["Float"]>;
  billRateValue?: Maybe<Scalars["Float"]>;
  reWeeklyLimit?: Maybe<Scalars["Float"]>;
  totalWorkHours?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "employee" */
export type EmployeeVarSampOrderBy = {
  averageBonus?: Maybe<OrderBy>;
  averageExpenses?: Maybe<OrderBy>;
  averageIncome?: Maybe<OrderBy>;
  billRateValue?: Maybe<OrderBy>;
  reWeeklyLimit?: Maybe<OrderBy>;
  totalWorkHours?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type EmployeeVarianceFields = {
  __typename?: "employee_variance_fields";
  averageBonus?: Maybe<Scalars["Float"]>;
  averageExpenses?: Maybe<Scalars["Float"]>;
  averageIncome?: Maybe<Scalars["Float"]>;
  billRateValue?: Maybe<Scalars["Float"]>;
  reWeeklyLimit?: Maybe<Scalars["Float"]>;
  totalWorkHours?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "employee" */
export type EmployeeVarianceOrderBy = {
  averageBonus?: Maybe<OrderBy>;
  averageExpenses?: Maybe<OrderBy>;
  averageIncome?: Maybe<OrderBy>;
  billRateValue?: Maybe<OrderBy>;
  reWeeklyLimit?: Maybe<OrderBy>;
  totalWorkHours?: Maybe<OrderBy>;
};

/** columns and relationships of "event_type" */
export type EventType = {
  __typename?: "event_type";
  createdAt: Scalars["timestamp"];
  description?: Maybe<Scalars["String"]>;
  duration: Scalars["numeric"];
  durationUnit?: Maybe<Scalars["String"]>;
  /** An object relationship */
  employee?: Maybe<Employee>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id: Scalars["uuid"];
  isActive?: Maybe<Scalars["Boolean"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["timestamp"];
};

/** aggregated selection of "event_type" */
export type EventTypeAggregate = {
  __typename?: "event_type_aggregate";
  aggregate?: Maybe<EventTypeAggregateFields>;
  nodes: Array<EventType>;
};

/** aggregate fields of "event_type" */
export type EventTypeAggregateFields = {
  __typename?: "event_type_aggregate_fields";
  avg?: Maybe<EventTypeAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<EventTypeMaxFields>;
  min?: Maybe<EventTypeMinFields>;
  stddev?: Maybe<EventTypeStddevFields>;
  stddev_pop?: Maybe<EventTypeStddevPopFields>;
  stddev_samp?: Maybe<EventTypeStddevSampFields>;
  sum?: Maybe<EventTypeSumFields>;
  var_pop?: Maybe<EventTypeVarPopFields>;
  var_samp?: Maybe<EventTypeVarSampFields>;
  variance?: Maybe<EventTypeVarianceFields>;
};

/** aggregate fields of "event_type" */
export type EventTypeAggregateFieldsCountArgs = {
  columns?: Maybe<Array<EventTypeSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "event_type" */
export type EventTypeAggregateOrderBy = {
  avg?: Maybe<EventTypeAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<EventTypeMaxOrderBy>;
  min?: Maybe<EventTypeMinOrderBy>;
  stddev?: Maybe<EventTypeStddevOrderBy>;
  stddev_pop?: Maybe<EventTypeStddevPopOrderBy>;
  stddev_samp?: Maybe<EventTypeStddevSampOrderBy>;
  sum?: Maybe<EventTypeSumOrderBy>;
  var_pop?: Maybe<EventTypeVarPopOrderBy>;
  var_samp?: Maybe<EventTypeVarSampOrderBy>;
  variance?: Maybe<EventTypeVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "event_type" */
export type EventTypeArrRelInsertInput = {
  data: Array<EventTypeInsertInput>;
  on_conflict?: Maybe<EventTypeOnConflict>;
};

/** aggregate avg on columns */
export type EventTypeAvgFields = {
  __typename?: "event_type_avg_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "event_type" */
export type EventTypeAvgOrderBy = {
  duration?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "event_type". All fields are combined with a logical 'AND'. */
export type EventTypeBoolExp = {
  _and?: Maybe<Array<Maybe<EventTypeBoolExp>>>;
  _not?: Maybe<EventTypeBoolExp>;
  _or?: Maybe<Array<Maybe<EventTypeBoolExp>>>;
  createdAt?: Maybe<TimestampComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  duration?: Maybe<NumericComparisonExp>;
  durationUnit?: Maybe<StringComparisonExp>;
  employee?: Maybe<EmployeeBoolExp>;
  employeeId?: Maybe<UuidComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  isActive?: Maybe<BooleanComparisonExp>;
  organizationId?: Maybe<UuidComparisonExp>;
  tenantId?: Maybe<UuidComparisonExp>;
  title?: Maybe<StringComparisonExp>;
  updatedAt?: Maybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "event_type" */
export enum EventTypeConstraint {
  /** unique or primary key constraint */
  PkD968f34984d7d85d96f782872fe = "PK_d968f34984d7d85d96f782872fe"
}

/** input type for incrementing integer column in table "event_type" */
export type EventTypeIncInput = {
  duration?: Maybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "event_type" */
export type EventTypeInsertInput = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["numeric"]>;
  durationUnit?: Maybe<Scalars["String"]>;
  employee?: Maybe<EmployeeObjRelInsertInput>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  isActive?: Maybe<Scalars["Boolean"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate max on columns */
export type EventTypeMaxFields = {
  __typename?: "event_type_max_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["numeric"]>;
  durationUnit?: Maybe<Scalars["String"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by max() on columns of table "event_type" */
export type EventTypeMaxOrderBy = {
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  duration?: Maybe<OrderBy>;
  durationUnit?: Maybe<OrderBy>;
  employeeId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type EventTypeMinFields = {
  __typename?: "event_type_min_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["numeric"]>;
  durationUnit?: Maybe<Scalars["String"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by min() on columns of table "event_type" */
export type EventTypeMinOrderBy = {
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  duration?: Maybe<OrderBy>;
  durationUnit?: Maybe<OrderBy>;
  employeeId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** response of any mutation on the table "event_type" */
export type EventTypeMutationResponse = {
  __typename?: "event_type_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<EventType>;
};

/** input type for inserting object relation for remote table "event_type" */
export type EventTypeObjRelInsertInput = {
  data: EventTypeInsertInput;
  on_conflict?: Maybe<EventTypeOnConflict>;
};

/** on conflict condition type for table "event_type" */
export type EventTypeOnConflict = {
  constraint: EventTypeConstraint;
  update_columns: Array<EventTypeUpdateColumn>;
  where?: Maybe<EventTypeBoolExp>;
};

/** ordering options when selecting data from "event_type" */
export type EventTypeOrderBy = {
  createdAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  duration?: Maybe<OrderBy>;
  durationUnit?: Maybe<OrderBy>;
  employee?: Maybe<EmployeeOrderBy>;
  employeeId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  isActive?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: "event_type" */
export type EventTypePkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "event_type" */
export enum EventTypeSelectColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Description = "description",
  /** column name */
  Duration = "duration",
  /** column name */
  DurationUnit = "durationUnit",
  /** column name */
  EmployeeId = "employeeId",
  /** column name */
  Id = "id",
  /** column name */
  IsActive = "isActive",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** input type for updating data in table "event_type" */
export type EventTypeSetInput = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  duration?: Maybe<Scalars["numeric"]>;
  durationUnit?: Maybe<Scalars["String"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  isActive?: Maybe<Scalars["Boolean"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate stddev on columns */
export type EventTypeStddevFields = {
  __typename?: "event_type_stddev_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "event_type" */
export type EventTypeStddevOrderBy = {
  duration?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type EventTypeStddevPopFields = {
  __typename?: "event_type_stddev_pop_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "event_type" */
export type EventTypeStddevPopOrderBy = {
  duration?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type EventTypeStddevSampFields = {
  __typename?: "event_type_stddev_samp_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "event_type" */
export type EventTypeStddevSampOrderBy = {
  duration?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type EventTypeSumFields = {
  __typename?: "event_type_sum_fields";
  duration?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "event_type" */
export type EventTypeSumOrderBy = {
  duration?: Maybe<OrderBy>;
};

/** update columns of table "event_type" */
export enum EventTypeUpdateColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Description = "description",
  /** column name */
  Duration = "duration",
  /** column name */
  DurationUnit = "durationUnit",
  /** column name */
  EmployeeId = "employeeId",
  /** column name */
  Id = "id",
  /** column name */
  IsActive = "isActive",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** aggregate var_pop on columns */
export type EventTypeVarPopFields = {
  __typename?: "event_type_var_pop_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "event_type" */
export type EventTypeVarPopOrderBy = {
  duration?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type EventTypeVarSampFields = {
  __typename?: "event_type_var_samp_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "event_type" */
export type EventTypeVarSampOrderBy = {
  duration?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type EventTypeVarianceFields = {
  __typename?: "event_type_variance_fields";
  duration?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "event_type" */
export type EventTypeVarianceOrderBy = {
  duration?: Maybe<OrderBy>;
};

/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type JsonComparisonExp = {
  _eq?: Maybe<Scalars["json"]>;
  _gt?: Maybe<Scalars["json"]>;
  _gte?: Maybe<Scalars["json"]>;
  _in?: Maybe<Array<Scalars["json"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["json"]>;
  _lte?: Maybe<Scalars["json"]>;
  _neq?: Maybe<Scalars["json"]>;
  _nin?: Maybe<Array<Scalars["json"]>>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: "mutation_root";
  /** delete data from the table: "activity" */
  delete_activity?: Maybe<ActivityMutationResponse>;
  /** delete single row from the table: "activity" */
  delete_activity_by_pk?: Maybe<Activity>;
  /** delete data from the table: "appointment_employee" */
  delete_appointment_employee?: Maybe<AppointmentEmployeeMutationResponse>;
  /** delete single row from the table: "appointment_employee" */
  delete_appointment_employee_by_pk?: Maybe<AppointmentEmployee>;
  /** delete data from the table: "availability_slot" */
  delete_availability_slot?: Maybe<AvailabilitySlotMutationResponse>;
  /** delete single row from the table: "availability_slot" */
  delete_availability_slot_by_pk?: Maybe<AvailabilitySlot>;
  /** delete data from the table: "contact" */
  delete_contact?: Maybe<ContactMutationResponse>;
  /** delete single row from the table: "contact" */
  delete_contact_by_pk?: Maybe<Contact>;
  /** delete data from the table: "employee" */
  delete_employee?: Maybe<EmployeeMutationResponse>;
  /** delete data from the table: "employee_appointment" */
  delete_employee_appointment?: Maybe<EmployeeAppointmentMutationResponse>;
  /** delete single row from the table: "employee_appointment" */
  delete_employee_appointment_by_pk?: Maybe<EmployeeAppointment>;
  /** delete single row from the table: "employee" */
  delete_employee_by_pk?: Maybe<Employee>;
  /** delete data from the table: "event_type" */
  delete_event_type?: Maybe<EventTypeMutationResponse>;
  /** delete single row from the table: "event_type" */
  delete_event_type_by_pk?: Maybe<EventType>;
  /** delete data from the table: "role" */
  delete_role?: Maybe<RoleMutationResponse>;
  /** delete single row from the table: "role" */
  delete_role_by_pk?: Maybe<Role>;
  /** delete data from the table: "screenshot" */
  delete_screenshot?: Maybe<ScreenshotMutationResponse>;
  /** delete single row from the table: "screenshot" */
  delete_screenshot_by_pk?: Maybe<Screenshot>;
  /** delete data from the table: "task" */
  delete_task?: Maybe<TaskMutationResponse>;
  /** delete single row from the table: "task" */
  delete_task_by_pk?: Maybe<Task>;
  /** delete data from the table: "time_log" */
  delete_time_log?: Maybe<TimeLogMutationResponse>;
  /** delete single row from the table: "time_log" */
  delete_time_log_by_pk?: Maybe<TimeLog>;
  /** delete data from the table: "time_slot" */
  delete_time_slot?: Maybe<TimeSlotMutationResponse>;
  /** delete single row from the table: "time_slot" */
  delete_time_slot_by_pk?: Maybe<TimeSlot>;
  /** delete data from the table: "time_slot_minute" */
  delete_time_slot_minute?: Maybe<TimeSlotMinuteMutationResponse>;
  /** delete single row from the table: "time_slot_minute" */
  delete_time_slot_minute_by_pk?: Maybe<TimeSlotMinute>;
  /** delete data from the table: "time_slot_time_logs" */
  delete_time_slot_time_logs?: Maybe<TimeSlotTimeLogsMutationResponse>;
  /** delete single row from the table: "time_slot_time_logs" */
  delete_time_slot_time_logs_by_pk?: Maybe<TimeSlotTimeLogs>;
  /** delete data from the table: "timesheet" */
  delete_timesheet?: Maybe<TimesheetMutationResponse>;
  /** delete single row from the table: "timesheet" */
  delete_timesheet_by_pk?: Maybe<Timesheet>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<UserMutationResponse>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "activity" */
  insert_activity?: Maybe<ActivityMutationResponse>;
  /** insert a single row into the table: "activity" */
  insert_activity_one?: Maybe<Activity>;
  /** insert data into the table: "appointment_employee" */
  insert_appointment_employee?: Maybe<AppointmentEmployeeMutationResponse>;
  /** insert a single row into the table: "appointment_employee" */
  insert_appointment_employee_one?: Maybe<AppointmentEmployee>;
  /** insert data into the table: "availability_slot" */
  insert_availability_slot?: Maybe<AvailabilitySlotMutationResponse>;
  /** insert a single row into the table: "availability_slot" */
  insert_availability_slot_one?: Maybe<AvailabilitySlot>;
  /** insert data into the table: "contact" */
  insert_contact?: Maybe<ContactMutationResponse>;
  /** insert a single row into the table: "contact" */
  insert_contact_one?: Maybe<Contact>;
  /** insert data into the table: "employee" */
  insert_employee?: Maybe<EmployeeMutationResponse>;
  /** insert data into the table: "employee_appointment" */
  insert_employee_appointment?: Maybe<EmployeeAppointmentMutationResponse>;
  /** insert a single row into the table: "employee_appointment" */
  insert_employee_appointment_one?: Maybe<EmployeeAppointment>;
  /** insert a single row into the table: "employee" */
  insert_employee_one?: Maybe<Employee>;
  /** insert data into the table: "event_type" */
  insert_event_type?: Maybe<EventTypeMutationResponse>;
  /** insert a single row into the table: "event_type" */
  insert_event_type_one?: Maybe<EventType>;
  /** insert data into the table: "role" */
  insert_role?: Maybe<RoleMutationResponse>;
  /** insert a single row into the table: "role" */
  insert_role_one?: Maybe<Role>;
  /** insert data into the table: "screenshot" */
  insert_screenshot?: Maybe<ScreenshotMutationResponse>;
  /** insert a single row into the table: "screenshot" */
  insert_screenshot_one?: Maybe<Screenshot>;
  /** insert data into the table: "task" */
  insert_task?: Maybe<TaskMutationResponse>;
  /** insert a single row into the table: "task" */
  insert_task_one?: Maybe<Task>;
  /** insert data into the table: "time_log" */
  insert_time_log?: Maybe<TimeLogMutationResponse>;
  /** insert a single row into the table: "time_log" */
  insert_time_log_one?: Maybe<TimeLog>;
  /** insert data into the table: "time_slot" */
  insert_time_slot?: Maybe<TimeSlotMutationResponse>;
  /** insert data into the table: "time_slot_minute" */
  insert_time_slot_minute?: Maybe<TimeSlotMinuteMutationResponse>;
  /** insert a single row into the table: "time_slot_minute" */
  insert_time_slot_minute_one?: Maybe<TimeSlotMinute>;
  /** insert a single row into the table: "time_slot" */
  insert_time_slot_one?: Maybe<TimeSlot>;
  /** insert data into the table: "time_slot_time_logs" */
  insert_time_slot_time_logs?: Maybe<TimeSlotTimeLogsMutationResponse>;
  /** insert a single row into the table: "time_slot_time_logs" */
  insert_time_slot_time_logs_one?: Maybe<TimeSlotTimeLogs>;
  /** insert data into the table: "timesheet" */
  insert_timesheet?: Maybe<TimesheetMutationResponse>;
  /** insert a single row into the table: "timesheet" */
  insert_timesheet_one?: Maybe<Timesheet>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<UserMutationResponse>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "activity" */
  update_activity?: Maybe<ActivityMutationResponse>;
  /** update single row of the table: "activity" */
  update_activity_by_pk?: Maybe<Activity>;
  /** update data of the table: "appointment_employee" */
  update_appointment_employee?: Maybe<AppointmentEmployeeMutationResponse>;
  /** update single row of the table: "appointment_employee" */
  update_appointment_employee_by_pk?: Maybe<AppointmentEmployee>;
  /** update data of the table: "availability_slot" */
  update_availability_slot?: Maybe<AvailabilitySlotMutationResponse>;
  /** update single row of the table: "availability_slot" */
  update_availability_slot_by_pk?: Maybe<AvailabilitySlot>;
  /** update data of the table: "contact" */
  update_contact?: Maybe<ContactMutationResponse>;
  /** update single row of the table: "contact" */
  update_contact_by_pk?: Maybe<Contact>;
  /** update data of the table: "employee" */
  update_employee?: Maybe<EmployeeMutationResponse>;
  /** update data of the table: "employee_appointment" */
  update_employee_appointment?: Maybe<EmployeeAppointmentMutationResponse>;
  /** update single row of the table: "employee_appointment" */
  update_employee_appointment_by_pk?: Maybe<EmployeeAppointment>;
  /** update single row of the table: "employee" */
  update_employee_by_pk?: Maybe<Employee>;
  /** update data of the table: "event_type" */
  update_event_type?: Maybe<EventTypeMutationResponse>;
  /** update single row of the table: "event_type" */
  update_event_type_by_pk?: Maybe<EventType>;
  /** update data of the table: "role" */
  update_role?: Maybe<RoleMutationResponse>;
  /** update single row of the table: "role" */
  update_role_by_pk?: Maybe<Role>;
  /** update data of the table: "screenshot" */
  update_screenshot?: Maybe<ScreenshotMutationResponse>;
  /** update single row of the table: "screenshot" */
  update_screenshot_by_pk?: Maybe<Screenshot>;
  /** update data of the table: "task" */
  update_task?: Maybe<TaskMutationResponse>;
  /** update single row of the table: "task" */
  update_task_by_pk?: Maybe<Task>;
  /** update data of the table: "time_log" */
  update_time_log?: Maybe<TimeLogMutationResponse>;
  /** update single row of the table: "time_log" */
  update_time_log_by_pk?: Maybe<TimeLog>;
  /** update data of the table: "time_slot" */
  update_time_slot?: Maybe<TimeSlotMutationResponse>;
  /** update single row of the table: "time_slot" */
  update_time_slot_by_pk?: Maybe<TimeSlot>;
  /** update data of the table: "time_slot_minute" */
  update_time_slot_minute?: Maybe<TimeSlotMinuteMutationResponse>;
  /** update single row of the table: "time_slot_minute" */
  update_time_slot_minute_by_pk?: Maybe<TimeSlotMinute>;
  /** update data of the table: "time_slot_time_logs" */
  update_time_slot_time_logs?: Maybe<TimeSlotTimeLogsMutationResponse>;
  /** update single row of the table: "time_slot_time_logs" */
  update_time_slot_time_logs_by_pk?: Maybe<TimeSlotTimeLogs>;
  /** update data of the table: "timesheet" */
  update_timesheet?: Maybe<TimesheetMutationResponse>;
  /** update single row of the table: "timesheet" */
  update_timesheet_by_pk?: Maybe<Timesheet>;
  /** update data of the table: "user" */
  update_user?: Maybe<UserMutationResponse>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};

/** mutation root */
export type MutationRootDeleteActivityArgs = {
  where: ActivityBoolExp;
};

/** mutation root */
export type MutationRootDeleteActivityByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type MutationRootDeleteAppointmentEmployeeArgs = {
  where: AppointmentEmployeeBoolExp;
};

/** mutation root */
export type MutationRootDeleteAppointmentEmployeeByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type MutationRootDeleteAvailabilitySlotArgs = {
  where: AvailabilitySlotBoolExp;
};

/** mutation root */
export type MutationRootDeleteAvailabilitySlotByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type MutationRootDeleteContactArgs = {
  where: ContactBoolExp;
};

/** mutation root */
export type MutationRootDeleteContactByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type MutationRootDeleteEmployeeArgs = {
  where: EmployeeBoolExp;
};

/** mutation root */
export type MutationRootDeleteEmployeeAppointmentArgs = {
  where: EmployeeAppointmentBoolExp;
};

/** mutation root */
export type MutationRootDeleteEmployeeAppointmentByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type MutationRootDeleteEmployeeByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type MutationRootDeleteEventTypeArgs = {
  where: EventTypeBoolExp;
};

/** mutation root */
export type MutationRootDeleteEventTypeByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type MutationRootDeleteRoleArgs = {
  where: RoleBoolExp;
};

/** mutation root */
export type MutationRootDeleteRoleByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type MutationRootDeleteScreenshotArgs = {
  where: ScreenshotBoolExp;
};

/** mutation root */
export type MutationRootDeleteScreenshotByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type MutationRootDeleteTaskArgs = {
  where: TaskBoolExp;
};

/** mutation root */
export type MutationRootDeleteTaskByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type MutationRootDeleteTimeLogArgs = {
  where: TimeLogBoolExp;
};

/** mutation root */
export type MutationRootDeleteTimeLogByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type MutationRootDeleteTimeSlotArgs = {
  where: TimeSlotBoolExp;
};

/** mutation root */
export type MutationRootDeleteTimeSlotByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type MutationRootDeleteTimeSlotMinuteArgs = {
  where: TimeSlotMinuteBoolExp;
};

/** mutation root */
export type MutationRootDeleteTimeSlotMinuteByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type MutationRootDeleteTimeSlotTimeLogsArgs = {
  where: TimeSlotTimeLogsBoolExp;
};

/** mutation root */
export type MutationRootDeleteTimeSlotTimeLogsByPkArgs = {
  timeLogId: Scalars["uuid"];
  timeSlotId: Scalars["uuid"];
};

/** mutation root */
export type MutationRootDeleteTimesheetArgs = {
  where: TimesheetBoolExp;
};

/** mutation root */
export type MutationRootDeleteTimesheetByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type MutationRootDeleteUserArgs = {
  where: UserBoolExp;
};

/** mutation root */
export type MutationRootDeleteUserByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type MutationRootInsertActivityArgs = {
  objects: Array<ActivityInsertInput>;
  on_conflict?: Maybe<ActivityOnConflict>;
};

/** mutation root */
export type MutationRootInsertActivityOneArgs = {
  object: ActivityInsertInput;
  on_conflict?: Maybe<ActivityOnConflict>;
};

/** mutation root */
export type MutationRootInsertAppointmentEmployeeArgs = {
  objects: Array<AppointmentEmployeeInsertInput>;
  on_conflict?: Maybe<AppointmentEmployeeOnConflict>;
};

/** mutation root */
export type MutationRootInsertAppointmentEmployeeOneArgs = {
  object: AppointmentEmployeeInsertInput;
  on_conflict?: Maybe<AppointmentEmployeeOnConflict>;
};

/** mutation root */
export type MutationRootInsertAvailabilitySlotArgs = {
  objects: Array<AvailabilitySlotInsertInput>;
  on_conflict?: Maybe<AvailabilitySlotOnConflict>;
};

/** mutation root */
export type MutationRootInsertAvailabilitySlotOneArgs = {
  object: AvailabilitySlotInsertInput;
  on_conflict?: Maybe<AvailabilitySlotOnConflict>;
};

/** mutation root */
export type MutationRootInsertContactArgs = {
  objects: Array<ContactInsertInput>;
  on_conflict?: Maybe<ContactOnConflict>;
};

/** mutation root */
export type MutationRootInsertContactOneArgs = {
  object: ContactInsertInput;
  on_conflict?: Maybe<ContactOnConflict>;
};

/** mutation root */
export type MutationRootInsertEmployeeArgs = {
  objects: Array<EmployeeInsertInput>;
  on_conflict?: Maybe<EmployeeOnConflict>;
};

/** mutation root */
export type MutationRootInsertEmployeeAppointmentArgs = {
  objects: Array<EmployeeAppointmentInsertInput>;
  on_conflict?: Maybe<EmployeeAppointmentOnConflict>;
};

/** mutation root */
export type MutationRootInsertEmployeeAppointmentOneArgs = {
  object: EmployeeAppointmentInsertInput;
  on_conflict?: Maybe<EmployeeAppointmentOnConflict>;
};

/** mutation root */
export type MutationRootInsertEmployeeOneArgs = {
  object: EmployeeInsertInput;
  on_conflict?: Maybe<EmployeeOnConflict>;
};

/** mutation root */
export type MutationRootInsertEventTypeArgs = {
  objects: Array<EventTypeInsertInput>;
  on_conflict?: Maybe<EventTypeOnConflict>;
};

/** mutation root */
export type MutationRootInsertEventTypeOneArgs = {
  object: EventTypeInsertInput;
  on_conflict?: Maybe<EventTypeOnConflict>;
};

/** mutation root */
export type MutationRootInsertRoleArgs = {
  objects: Array<RoleInsertInput>;
  on_conflict?: Maybe<RoleOnConflict>;
};

/** mutation root */
export type MutationRootInsertRoleOneArgs = {
  object: RoleInsertInput;
  on_conflict?: Maybe<RoleOnConflict>;
};

/** mutation root */
export type MutationRootInsertScreenshotArgs = {
  objects: Array<ScreenshotInsertInput>;
  on_conflict?: Maybe<ScreenshotOnConflict>;
};

/** mutation root */
export type MutationRootInsertScreenshotOneArgs = {
  object: ScreenshotInsertInput;
  on_conflict?: Maybe<ScreenshotOnConflict>;
};

/** mutation root */
export type MutationRootInsertTaskArgs = {
  objects: Array<TaskInsertInput>;
  on_conflict?: Maybe<TaskOnConflict>;
};

/** mutation root */
export type MutationRootInsertTaskOneArgs = {
  object: TaskInsertInput;
  on_conflict?: Maybe<TaskOnConflict>;
};

/** mutation root */
export type MutationRootInsertTimeLogArgs = {
  objects: Array<TimeLogInsertInput>;
  on_conflict?: Maybe<TimeLogOnConflict>;
};

/** mutation root */
export type MutationRootInsertTimeLogOneArgs = {
  object: TimeLogInsertInput;
  on_conflict?: Maybe<TimeLogOnConflict>;
};

/** mutation root */
export type MutationRootInsertTimeSlotArgs = {
  objects: Array<TimeSlotInsertInput>;
  on_conflict?: Maybe<TimeSlotOnConflict>;
};

/** mutation root */
export type MutationRootInsertTimeSlotMinuteArgs = {
  objects: Array<TimeSlotMinuteInsertInput>;
  on_conflict?: Maybe<TimeSlotMinuteOnConflict>;
};

/** mutation root */
export type MutationRootInsertTimeSlotMinuteOneArgs = {
  object: TimeSlotMinuteInsertInput;
  on_conflict?: Maybe<TimeSlotMinuteOnConflict>;
};

/** mutation root */
export type MutationRootInsertTimeSlotOneArgs = {
  object: TimeSlotInsertInput;
  on_conflict?: Maybe<TimeSlotOnConflict>;
};

/** mutation root */
export type MutationRootInsertTimeSlotTimeLogsArgs = {
  objects: Array<TimeSlotTimeLogsInsertInput>;
  on_conflict?: Maybe<TimeSlotTimeLogsOnConflict>;
};

/** mutation root */
export type MutationRootInsertTimeSlotTimeLogsOneArgs = {
  object: TimeSlotTimeLogsInsertInput;
  on_conflict?: Maybe<TimeSlotTimeLogsOnConflict>;
};

/** mutation root */
export type MutationRootInsertTimesheetArgs = {
  objects: Array<TimesheetInsertInput>;
  on_conflict?: Maybe<TimesheetOnConflict>;
};

/** mutation root */
export type MutationRootInsertTimesheetOneArgs = {
  object: TimesheetInsertInput;
  on_conflict?: Maybe<TimesheetOnConflict>;
};

/** mutation root */
export type MutationRootInsertUserArgs = {
  objects: Array<UserInsertInput>;
  on_conflict?: Maybe<UserOnConflict>;
};

/** mutation root */
export type MutationRootInsertUserOneArgs = {
  object: UserInsertInput;
  on_conflict?: Maybe<UserOnConflict>;
};

/** mutation root */
export type MutationRootUpdateActivityArgs = {
  _inc?: Maybe<ActivityIncInput>;
  _set?: Maybe<ActivitySetInput>;
  where: ActivityBoolExp;
};

/** mutation root */
export type MutationRootUpdateActivityByPkArgs = {
  _inc?: Maybe<ActivityIncInput>;
  _set?: Maybe<ActivitySetInput>;
  pk_columns: ActivityPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateAppointmentEmployeeArgs = {
  _set?: Maybe<AppointmentEmployeeSetInput>;
  where: AppointmentEmployeeBoolExp;
};

/** mutation root */
export type MutationRootUpdateAppointmentEmployeeByPkArgs = {
  _set?: Maybe<AppointmentEmployeeSetInput>;
  pk_columns: AppointmentEmployeePkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateAvailabilitySlotArgs = {
  _set?: Maybe<AvailabilitySlotSetInput>;
  where: AvailabilitySlotBoolExp;
};

/** mutation root */
export type MutationRootUpdateAvailabilitySlotByPkArgs = {
  _set?: Maybe<AvailabilitySlotSetInput>;
  pk_columns: AvailabilitySlotPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateContactArgs = {
  _inc?: Maybe<ContactIncInput>;
  _set?: Maybe<ContactSetInput>;
  where: ContactBoolExp;
};

/** mutation root */
export type MutationRootUpdateContactByPkArgs = {
  _inc?: Maybe<ContactIncInput>;
  _set?: Maybe<ContactSetInput>;
  pk_columns: ContactPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateEmployeeArgs = {
  _inc?: Maybe<EmployeeIncInput>;
  _set?: Maybe<EmployeeSetInput>;
  where: EmployeeBoolExp;
};

/** mutation root */
export type MutationRootUpdateEmployeeAppointmentArgs = {
  _inc?: Maybe<EmployeeAppointmentIncInput>;
  _set?: Maybe<EmployeeAppointmentSetInput>;
  where: EmployeeAppointmentBoolExp;
};

/** mutation root */
export type MutationRootUpdateEmployeeAppointmentByPkArgs = {
  _inc?: Maybe<EmployeeAppointmentIncInput>;
  _set?: Maybe<EmployeeAppointmentSetInput>;
  pk_columns: EmployeeAppointmentPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateEmployeeByPkArgs = {
  _inc?: Maybe<EmployeeIncInput>;
  _set?: Maybe<EmployeeSetInput>;
  pk_columns: EmployeePkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateEventTypeArgs = {
  _inc?: Maybe<EventTypeIncInput>;
  _set?: Maybe<EventTypeSetInput>;
  where: EventTypeBoolExp;
};

/** mutation root */
export type MutationRootUpdateEventTypeByPkArgs = {
  _inc?: Maybe<EventTypeIncInput>;
  _set?: Maybe<EventTypeSetInput>;
  pk_columns: EventTypePkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateRoleArgs = {
  _set?: Maybe<RoleSetInput>;
  where: RoleBoolExp;
};

/** mutation root */
export type MutationRootUpdateRoleByPkArgs = {
  _set?: Maybe<RoleSetInput>;
  pk_columns: RolePkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateScreenshotArgs = {
  _set?: Maybe<ScreenshotSetInput>;
  where: ScreenshotBoolExp;
};

/** mutation root */
export type MutationRootUpdateScreenshotByPkArgs = {
  _set?: Maybe<ScreenshotSetInput>;
  pk_columns: ScreenshotPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateTaskArgs = {
  _inc?: Maybe<TaskIncInput>;
  _set?: Maybe<TaskSetInput>;
  where: TaskBoolExp;
};

/** mutation root */
export type MutationRootUpdateTaskByPkArgs = {
  _inc?: Maybe<TaskIncInput>;
  _set?: Maybe<TaskSetInput>;
  pk_columns: TaskPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateTimeLogArgs = {
  _set?: Maybe<TimeLogSetInput>;
  where: TimeLogBoolExp;
};

/** mutation root */
export type MutationRootUpdateTimeLogByPkArgs = {
  _set?: Maybe<TimeLogSetInput>;
  pk_columns: TimeLogPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateTimeSlotArgs = {
  _inc?: Maybe<TimeSlotIncInput>;
  _set?: Maybe<TimeSlotSetInput>;
  where: TimeSlotBoolExp;
};

/** mutation root */
export type MutationRootUpdateTimeSlotByPkArgs = {
  _inc?: Maybe<TimeSlotIncInput>;
  _set?: Maybe<TimeSlotSetInput>;
  pk_columns: TimeSlotPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateTimeSlotMinuteArgs = {
  _inc?: Maybe<TimeSlotMinuteIncInput>;
  _set?: Maybe<TimeSlotMinuteSetInput>;
  where: TimeSlotMinuteBoolExp;
};

/** mutation root */
export type MutationRootUpdateTimeSlotMinuteByPkArgs = {
  _inc?: Maybe<TimeSlotMinuteIncInput>;
  _set?: Maybe<TimeSlotMinuteSetInput>;
  pk_columns: TimeSlotMinutePkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateTimeSlotTimeLogsArgs = {
  _set?: Maybe<TimeSlotTimeLogsSetInput>;
  where: TimeSlotTimeLogsBoolExp;
};

/** mutation root */
export type MutationRootUpdateTimeSlotTimeLogsByPkArgs = {
  _set?: Maybe<TimeSlotTimeLogsSetInput>;
  pk_columns: TimeSlotTimeLogsPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateTimesheetArgs = {
  _inc?: Maybe<TimesheetIncInput>;
  _set?: Maybe<TimesheetSetInput>;
  where: TimesheetBoolExp;
};

/** mutation root */
export type MutationRootUpdateTimesheetByPkArgs = {
  _inc?: Maybe<TimesheetIncInput>;
  _set?: Maybe<TimesheetSetInput>;
  pk_columns: TimesheetPkColumnsInput;
};

/** mutation root */
export type MutationRootUpdateUserArgs = {
  _set?: Maybe<UserSetInput>;
  where: UserBoolExp;
};

/** mutation root */
export type MutationRootUpdateUserByPkArgs = {
  _set?: Maybe<UserSetInput>;
  pk_columns: UserPkColumnsInput;
};

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: Maybe<Scalars["numeric"]>;
  _gt?: Maybe<Scalars["numeric"]>;
  _gte?: Maybe<Scalars["numeric"]>;
  _in?: Maybe<Array<Scalars["numeric"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["numeric"]>;
  _lte?: Maybe<Scalars["numeric"]>;
  _neq?: Maybe<Scalars["numeric"]>;
  _nin?: Maybe<Array<Scalars["numeric"]>>;
};

/** column ordering options */
export enum OrderBy {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last"
}

/** query root */
export type QueryRoot = {
  __typename?: "query_root";
  /** fetch data from the table: "activity" */
  activity: Array<Activity>;
  /** fetch aggregated fields from the table: "activity" */
  activity_aggregate: ActivityAggregate;
  /** fetch data from the table: "activity" using primary key columns */
  activity_by_pk?: Maybe<Activity>;
  /** fetch data from the table: "appointment_employee" */
  appointment_employee: Array<AppointmentEmployee>;
  /** fetch aggregated fields from the table: "appointment_employee" */
  appointment_employee_aggregate: AppointmentEmployeeAggregate;
  /** fetch data from the table: "appointment_employee" using primary key columns */
  appointment_employee_by_pk?: Maybe<AppointmentEmployee>;
  /** fetch data from the table: "availability_slot" */
  availability_slot: Array<AvailabilitySlot>;
  /** fetch aggregated fields from the table: "availability_slot" */
  availability_slot_aggregate: AvailabilitySlotAggregate;
  /** fetch data from the table: "availability_slot" using primary key columns */
  availability_slot_by_pk?: Maybe<AvailabilitySlot>;
  /** fetch data from the table: "contact" */
  contact: Array<Contact>;
  /** fetch aggregated fields from the table: "contact" */
  contact_aggregate: ContactAggregate;
  /** fetch data from the table: "contact" using primary key columns */
  contact_by_pk?: Maybe<Contact>;
  /** fetch data from the table: "employee" */
  employee: Array<Employee>;
  /** fetch aggregated fields from the table: "employee" */
  employee_aggregate: EmployeeAggregate;
  /** fetch data from the table: "employee_appointment" */
  employee_appointment: Array<EmployeeAppointment>;
  /** fetch aggregated fields from the table: "employee_appointment" */
  employee_appointment_aggregate: EmployeeAppointmentAggregate;
  /** fetch data from the table: "employee_appointment" using primary key columns */
  employee_appointment_by_pk?: Maybe<EmployeeAppointment>;
  /** fetch data from the table: "employee" using primary key columns */
  employee_by_pk?: Maybe<Employee>;
  /** fetch data from the table: "event_type" */
  event_type: Array<EventType>;
  /** fetch aggregated fields from the table: "event_type" */
  event_type_aggregate: EventTypeAggregate;
  /** fetch data from the table: "event_type" using primary key columns */
  event_type_by_pk?: Maybe<EventType>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: RoleAggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "screenshot" */
  screenshot: Array<Screenshot>;
  /** fetch aggregated fields from the table: "screenshot" */
  screenshot_aggregate: ScreenshotAggregate;
  /** fetch data from the table: "screenshot" using primary key columns */
  screenshot_by_pk?: Maybe<Screenshot>;
  /** fetch data from the table: "task" */
  task: Array<Task>;
  /** fetch aggregated fields from the table: "task" */
  task_aggregate: TaskAggregate;
  /** fetch data from the table: "task" using primary key columns */
  task_by_pk?: Maybe<Task>;
  /** fetch data from the table: "time_log" */
  time_log: Array<TimeLog>;
  /** fetch aggregated fields from the table: "time_log" */
  time_log_aggregate: TimeLogAggregate;
  /** fetch data from the table: "time_log" using primary key columns */
  time_log_by_pk?: Maybe<TimeLog>;
  /** fetch data from the table: "time_slot" */
  time_slot: Array<TimeSlot>;
  /** fetch aggregated fields from the table: "time_slot" */
  time_slot_aggregate: TimeSlotAggregate;
  /** fetch data from the table: "time_slot" using primary key columns */
  time_slot_by_pk?: Maybe<TimeSlot>;
  /** fetch data from the table: "time_slot_minute" */
  time_slot_minute: Array<TimeSlotMinute>;
  /** fetch aggregated fields from the table: "time_slot_minute" */
  time_slot_minute_aggregate: TimeSlotMinuteAggregate;
  /** fetch data from the table: "time_slot_minute" using primary key columns */
  time_slot_minute_by_pk?: Maybe<TimeSlotMinute>;
  /** fetch data from the table: "time_slot_time_logs" */
  time_slot_time_logs: Array<TimeSlotTimeLogs>;
  /** fetch aggregated fields from the table: "time_slot_time_logs" */
  time_slot_time_logs_aggregate: TimeSlotTimeLogsAggregate;
  /** fetch data from the table: "time_slot_time_logs" using primary key columns */
  time_slot_time_logs_by_pk?: Maybe<TimeSlotTimeLogs>;
  /** fetch data from the table: "timesheet" */
  timesheet: Array<Timesheet>;
  /** fetch aggregated fields from the table: "timesheet" */
  timesheet_aggregate: TimesheetAggregate;
  /** fetch data from the table: "timesheet" using primary key columns */
  timesheet_by_pk?: Maybe<Timesheet>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};

/** query root */
export type QueryRootActivityArgs = {
  distinct_on?: Maybe<Array<ActivitySelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ActivityOrderBy>>;
  where?: Maybe<ActivityBoolExp>;
};

/** query root */
export type QueryRootActivityAggregateArgs = {
  distinct_on?: Maybe<Array<ActivitySelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ActivityOrderBy>>;
  where?: Maybe<ActivityBoolExp>;
};

/** query root */
export type QueryRootActivityByPkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type QueryRootAppointmentEmployeeArgs = {
  distinct_on?: Maybe<Array<AppointmentEmployeeSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<AppointmentEmployeeOrderBy>>;
  where?: Maybe<AppointmentEmployeeBoolExp>;
};

/** query root */
export type QueryRootAppointmentEmployeeAggregateArgs = {
  distinct_on?: Maybe<Array<AppointmentEmployeeSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<AppointmentEmployeeOrderBy>>;
  where?: Maybe<AppointmentEmployeeBoolExp>;
};

/** query root */
export type QueryRootAppointmentEmployeeByPkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type QueryRootAvailabilitySlotArgs = {
  distinct_on?: Maybe<Array<AvailabilitySlotSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<AvailabilitySlotOrderBy>>;
  where?: Maybe<AvailabilitySlotBoolExp>;
};

/** query root */
export type QueryRootAvailabilitySlotAggregateArgs = {
  distinct_on?: Maybe<Array<AvailabilitySlotSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<AvailabilitySlotOrderBy>>;
  where?: Maybe<AvailabilitySlotBoolExp>;
};

/** query root */
export type QueryRootAvailabilitySlotByPkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type QueryRootContactArgs = {
  distinct_on?: Maybe<Array<ContactSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ContactOrderBy>>;
  where?: Maybe<ContactBoolExp>;
};

/** query root */
export type QueryRootContactAggregateArgs = {
  distinct_on?: Maybe<Array<ContactSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ContactOrderBy>>;
  where?: Maybe<ContactBoolExp>;
};

/** query root */
export type QueryRootContactByPkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type QueryRootEmployeeArgs = {
  distinct_on?: Maybe<Array<EmployeeSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<EmployeeOrderBy>>;
  where?: Maybe<EmployeeBoolExp>;
};

/** query root */
export type QueryRootEmployeeAggregateArgs = {
  distinct_on?: Maybe<Array<EmployeeSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<EmployeeOrderBy>>;
  where?: Maybe<EmployeeBoolExp>;
};

/** query root */
export type QueryRootEmployeeAppointmentArgs = {
  distinct_on?: Maybe<Array<EmployeeAppointmentSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<EmployeeAppointmentOrderBy>>;
  where?: Maybe<EmployeeAppointmentBoolExp>;
};

/** query root */
export type QueryRootEmployeeAppointmentAggregateArgs = {
  distinct_on?: Maybe<Array<EmployeeAppointmentSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<EmployeeAppointmentOrderBy>>;
  where?: Maybe<EmployeeAppointmentBoolExp>;
};

/** query root */
export type QueryRootEmployeeAppointmentByPkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type QueryRootEmployeeByPkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type QueryRootEventTypeArgs = {
  distinct_on?: Maybe<Array<EventTypeSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<EventTypeOrderBy>>;
  where?: Maybe<EventTypeBoolExp>;
};

/** query root */
export type QueryRootEventTypeAggregateArgs = {
  distinct_on?: Maybe<Array<EventTypeSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<EventTypeOrderBy>>;
  where?: Maybe<EventTypeBoolExp>;
};

/** query root */
export type QueryRootEventTypeByPkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type QueryRootRoleArgs = {
  distinct_on?: Maybe<Array<RoleSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RoleOrderBy>>;
  where?: Maybe<RoleBoolExp>;
};

/** query root */
export type QueryRootRoleAggregateArgs = {
  distinct_on?: Maybe<Array<RoleSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RoleOrderBy>>;
  where?: Maybe<RoleBoolExp>;
};

/** query root */
export type QueryRootRoleByPkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type QueryRootScreenshotArgs = {
  distinct_on?: Maybe<Array<ScreenshotSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ScreenshotOrderBy>>;
  where?: Maybe<ScreenshotBoolExp>;
};

/** query root */
export type QueryRootScreenshotAggregateArgs = {
  distinct_on?: Maybe<Array<ScreenshotSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ScreenshotOrderBy>>;
  where?: Maybe<ScreenshotBoolExp>;
};

/** query root */
export type QueryRootScreenshotByPkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type QueryRootTaskArgs = {
  distinct_on?: Maybe<Array<TaskSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TaskOrderBy>>;
  where?: Maybe<TaskBoolExp>;
};

/** query root */
export type QueryRootTaskAggregateArgs = {
  distinct_on?: Maybe<Array<TaskSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TaskOrderBy>>;
  where?: Maybe<TaskBoolExp>;
};

/** query root */
export type QueryRootTaskByPkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type QueryRootTimeLogArgs = {
  distinct_on?: Maybe<Array<TimeLogSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeLogOrderBy>>;
  where?: Maybe<TimeLogBoolExp>;
};

/** query root */
export type QueryRootTimeLogAggregateArgs = {
  distinct_on?: Maybe<Array<TimeLogSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeLogOrderBy>>;
  where?: Maybe<TimeLogBoolExp>;
};

/** query root */
export type QueryRootTimeLogByPkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type QueryRootTimeSlotArgs = {
  distinct_on?: Maybe<Array<TimeSlotSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeSlotOrderBy>>;
  where?: Maybe<TimeSlotBoolExp>;
};

/** query root */
export type QueryRootTimeSlotAggregateArgs = {
  distinct_on?: Maybe<Array<TimeSlotSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeSlotOrderBy>>;
  where?: Maybe<TimeSlotBoolExp>;
};

/** query root */
export type QueryRootTimeSlotByPkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type QueryRootTimeSlotMinuteArgs = {
  distinct_on?: Maybe<Array<TimeSlotMinuteSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeSlotMinuteOrderBy>>;
  where?: Maybe<TimeSlotMinuteBoolExp>;
};

/** query root */
export type QueryRootTimeSlotMinuteAggregateArgs = {
  distinct_on?: Maybe<Array<TimeSlotMinuteSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeSlotMinuteOrderBy>>;
  where?: Maybe<TimeSlotMinuteBoolExp>;
};

/** query root */
export type QueryRootTimeSlotMinuteByPkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type QueryRootTimeSlotTimeLogsArgs = {
  distinct_on?: Maybe<Array<TimeSlotTimeLogsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeSlotTimeLogsOrderBy>>;
  where?: Maybe<TimeSlotTimeLogsBoolExp>;
};

/** query root */
export type QueryRootTimeSlotTimeLogsAggregateArgs = {
  distinct_on?: Maybe<Array<TimeSlotTimeLogsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeSlotTimeLogsOrderBy>>;
  where?: Maybe<TimeSlotTimeLogsBoolExp>;
};

/** query root */
export type QueryRootTimeSlotTimeLogsByPkArgs = {
  timeLogId: Scalars["uuid"];
  timeSlotId: Scalars["uuid"];
};

/** query root */
export type QueryRootTimesheetArgs = {
  distinct_on?: Maybe<Array<TimesheetSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimesheetOrderBy>>;
  where?: Maybe<TimesheetBoolExp>;
};

/** query root */
export type QueryRootTimesheetAggregateArgs = {
  distinct_on?: Maybe<Array<TimesheetSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimesheetOrderBy>>;
  where?: Maybe<TimesheetBoolExp>;
};

/** query root */
export type QueryRootTimesheetByPkArgs = {
  id: Scalars["uuid"];
};

/** query root */
export type QueryRootUserArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
};

/** query root */
export type QueryRootUserAggregateArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
};

/** query root */
export type QueryRootUserByPkArgs = {
  id: Scalars["uuid"];
};

/** columns and relationships of "role" */
export type Role = {
  __typename?: "role";
  createdAt: Scalars["timestamp"];
  id: Scalars["uuid"];
  name: Scalars["String"];
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt: Scalars["timestamp"];
  /** An array relationship */
  users: Array<User>;
  /** An aggregated array relationship */
  users_aggregate: UserAggregate;
};

/** columns and relationships of "role" */
export type RoleUsersArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
};

/** columns and relationships of "role" */
export type RoleUsersAggregateArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
};

/** aggregated selection of "role" */
export type RoleAggregate = {
  __typename?: "role_aggregate";
  aggregate?: Maybe<RoleAggregateFields>;
  nodes: Array<Role>;
};

/** aggregate fields of "role" */
export type RoleAggregateFields = {
  __typename?: "role_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<RoleMaxFields>;
  min?: Maybe<RoleMinFields>;
};

/** aggregate fields of "role" */
export type RoleAggregateFieldsCountArgs = {
  columns?: Maybe<Array<RoleSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "role" */
export type RoleAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<RoleMaxOrderBy>;
  min?: Maybe<RoleMinOrderBy>;
};

/** input type for inserting array relation for remote table "role" */
export type RoleArrRelInsertInput = {
  data: Array<RoleInsertInput>;
  on_conflict?: Maybe<RoleOnConflict>;
};

/** Boolean expression to filter rows from the table "role". All fields are combined with a logical 'AND'. */
export type RoleBoolExp = {
  _and?: Maybe<Array<Maybe<RoleBoolExp>>>;
  _not?: Maybe<RoleBoolExp>;
  _or?: Maybe<Array<Maybe<RoleBoolExp>>>;
  createdAt?: Maybe<TimestampComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  tenantId?: Maybe<UuidComparisonExp>;
  updatedAt?: Maybe<TimestampComparisonExp>;
  users?: Maybe<UserBoolExp>;
};

/** unique or primary key constraints on table "role" */
export enum RoleConstraint {
  /** unique or primary key constraint */
  PkB36bcfe02fc8de3c57a8b2391c2 = "PK_b36bcfe02fc8de3c57a8b2391c2"
}

/** input type for inserting data into table "role" */
export type RoleInsertInput = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
  users?: Maybe<UserArrRelInsertInput>;
};

/** aggregate max on columns */
export type RoleMaxFields = {
  __typename?: "role_max_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by max() on columns of table "role" */
export type RoleMaxOrderBy = {
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type RoleMinFields = {
  __typename?: "role_min_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by min() on columns of table "role" */
export type RoleMinOrderBy = {
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** response of any mutation on the table "role" */
export type RoleMutationResponse = {
  __typename?: "role_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Role>;
};

/** input type for inserting object relation for remote table "role" */
export type RoleObjRelInsertInput = {
  data: RoleInsertInput;
  on_conflict?: Maybe<RoleOnConflict>;
};

/** on conflict condition type for table "role" */
export type RoleOnConflict = {
  constraint: RoleConstraint;
  update_columns: Array<RoleUpdateColumn>;
  where?: Maybe<RoleBoolExp>;
};

/** ordering options when selecting data from "role" */
export type RoleOrderBy = {
  createdAt?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  users_aggregate?: Maybe<UserAggregateOrderBy>;
};

/** primary key columns input for table: "role" */
export type RolePkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "role" */
export enum RoleSelectColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** input type for updating data in table "role" */
export type RoleSetInput = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  name?: Maybe<Scalars["String"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** update columns of table "role" */
export enum RoleUpdateColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** columns and relationships of "screenshot" */
export type Screenshot = {
  __typename?: "screenshot";
  createdAt: Scalars["timestamp"];
  deletedAt?: Maybe<Scalars["timestamp"]>;
  file: Scalars["String"];
  id: Scalars["uuid"];
  organizationId?: Maybe<Scalars["uuid"]>;
  recordedAt?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  thumb?: Maybe<Scalars["String"]>;
  timeSlotId?: Maybe<Scalars["uuid"]>;
  /** An object relationship */
  time_slot?: Maybe<TimeSlot>;
  updatedAt: Scalars["timestamp"];
};

/** aggregated selection of "screenshot" */
export type ScreenshotAggregate = {
  __typename?: "screenshot_aggregate";
  aggregate?: Maybe<ScreenshotAggregateFields>;
  nodes: Array<Screenshot>;
};

/** aggregate fields of "screenshot" */
export type ScreenshotAggregateFields = {
  __typename?: "screenshot_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<ScreenshotMaxFields>;
  min?: Maybe<ScreenshotMinFields>;
};

/** aggregate fields of "screenshot" */
export type ScreenshotAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ScreenshotSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "screenshot" */
export type ScreenshotAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<ScreenshotMaxOrderBy>;
  min?: Maybe<ScreenshotMinOrderBy>;
};

/** input type for inserting array relation for remote table "screenshot" */
export type ScreenshotArrRelInsertInput = {
  data: Array<ScreenshotInsertInput>;
  on_conflict?: Maybe<ScreenshotOnConflict>;
};

/** Boolean expression to filter rows from the table "screenshot". All fields are combined with a logical 'AND'. */
export type ScreenshotBoolExp = {
  _and?: Maybe<Array<Maybe<ScreenshotBoolExp>>>;
  _not?: Maybe<ScreenshotBoolExp>;
  _or?: Maybe<Array<Maybe<ScreenshotBoolExp>>>;
  createdAt?: Maybe<TimestampComparisonExp>;
  deletedAt?: Maybe<TimestampComparisonExp>;
  file?: Maybe<StringComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  organizationId?: Maybe<UuidComparisonExp>;
  recordedAt?: Maybe<TimestampComparisonExp>;
  tenantId?: Maybe<UuidComparisonExp>;
  thumb?: Maybe<StringComparisonExp>;
  timeSlotId?: Maybe<UuidComparisonExp>;
  time_slot?: Maybe<TimeSlotBoolExp>;
  updatedAt?: Maybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "screenshot" */
export enum ScreenshotConstraint {
  /** unique or primary key constraint */
  PkBa03e6a8a41f430189837f84fd9 = "PK_ba03e6a8a41f430189837f84fd9"
}

/** input type for inserting data into table "screenshot" */
export type ScreenshotInsertInput = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  deletedAt?: Maybe<Scalars["timestamp"]>;
  file?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  recordedAt?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  thumb?: Maybe<Scalars["String"]>;
  timeSlotId?: Maybe<Scalars["uuid"]>;
  time_slot?: Maybe<TimeSlotObjRelInsertInput>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate max on columns */
export type ScreenshotMaxFields = {
  __typename?: "screenshot_max_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  deletedAt?: Maybe<Scalars["timestamp"]>;
  file?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  recordedAt?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  thumb?: Maybe<Scalars["String"]>;
  timeSlotId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by max() on columns of table "screenshot" */
export type ScreenshotMaxOrderBy = {
  createdAt?: Maybe<OrderBy>;
  deletedAt?: Maybe<OrderBy>;
  file?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  recordedAt?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  thumb?: Maybe<OrderBy>;
  timeSlotId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ScreenshotMinFields = {
  __typename?: "screenshot_min_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  deletedAt?: Maybe<Scalars["timestamp"]>;
  file?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  recordedAt?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  thumb?: Maybe<Scalars["String"]>;
  timeSlotId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by min() on columns of table "screenshot" */
export type ScreenshotMinOrderBy = {
  createdAt?: Maybe<OrderBy>;
  deletedAt?: Maybe<OrderBy>;
  file?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  recordedAt?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  thumb?: Maybe<OrderBy>;
  timeSlotId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** response of any mutation on the table "screenshot" */
export type ScreenshotMutationResponse = {
  __typename?: "screenshot_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Screenshot>;
};

/** input type for inserting object relation for remote table "screenshot" */
export type ScreenshotObjRelInsertInput = {
  data: ScreenshotInsertInput;
  on_conflict?: Maybe<ScreenshotOnConflict>;
};

/** on conflict condition type for table "screenshot" */
export type ScreenshotOnConflict = {
  constraint: ScreenshotConstraint;
  update_columns: Array<ScreenshotUpdateColumn>;
  where?: Maybe<ScreenshotBoolExp>;
};

/** ordering options when selecting data from "screenshot" */
export type ScreenshotOrderBy = {
  createdAt?: Maybe<OrderBy>;
  deletedAt?: Maybe<OrderBy>;
  file?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  recordedAt?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  thumb?: Maybe<OrderBy>;
  timeSlotId?: Maybe<OrderBy>;
  time_slot?: Maybe<TimeSlotOrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: "screenshot" */
export type ScreenshotPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "screenshot" */
export enum ScreenshotSelectColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  File = "file",
  /** column name */
  Id = "id",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  RecordedAt = "recordedAt",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  Thumb = "thumb",
  /** column name */
  TimeSlotId = "timeSlotId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** input type for updating data in table "screenshot" */
export type ScreenshotSetInput = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  deletedAt?: Maybe<Scalars["timestamp"]>;
  file?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  recordedAt?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  thumb?: Maybe<Scalars["String"]>;
  timeSlotId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** update columns of table "screenshot" */
export enum ScreenshotUpdateColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  File = "file",
  /** column name */
  Id = "id",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  RecordedAt = "recordedAt",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  Thumb = "thumb",
  /** column name */
  TimeSlotId = "timeSlotId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** subscription root */
export type SubscriptionRoot = {
  __typename?: "subscription_root";
  /** fetch data from the table: "activity" */
  activity: Array<Activity>;
  /** fetch aggregated fields from the table: "activity" */
  activity_aggregate: ActivityAggregate;
  /** fetch data from the table: "activity" using primary key columns */
  activity_by_pk?: Maybe<Activity>;
  /** fetch data from the table: "appointment_employee" */
  appointment_employee: Array<AppointmentEmployee>;
  /** fetch aggregated fields from the table: "appointment_employee" */
  appointment_employee_aggregate: AppointmentEmployeeAggregate;
  /** fetch data from the table: "appointment_employee" using primary key columns */
  appointment_employee_by_pk?: Maybe<AppointmentEmployee>;
  /** fetch data from the table: "availability_slot" */
  availability_slot: Array<AvailabilitySlot>;
  /** fetch aggregated fields from the table: "availability_slot" */
  availability_slot_aggregate: AvailabilitySlotAggregate;
  /** fetch data from the table: "availability_slot" using primary key columns */
  availability_slot_by_pk?: Maybe<AvailabilitySlot>;
  /** fetch data from the table: "contact" */
  contact: Array<Contact>;
  /** fetch aggregated fields from the table: "contact" */
  contact_aggregate: ContactAggregate;
  /** fetch data from the table: "contact" using primary key columns */
  contact_by_pk?: Maybe<Contact>;
  /** fetch data from the table: "employee" */
  employee: Array<Employee>;
  /** fetch aggregated fields from the table: "employee" */
  employee_aggregate: EmployeeAggregate;
  /** fetch data from the table: "employee_appointment" */
  employee_appointment: Array<EmployeeAppointment>;
  /** fetch aggregated fields from the table: "employee_appointment" */
  employee_appointment_aggregate: EmployeeAppointmentAggregate;
  /** fetch data from the table: "employee_appointment" using primary key columns */
  employee_appointment_by_pk?: Maybe<EmployeeAppointment>;
  /** fetch data from the table: "employee" using primary key columns */
  employee_by_pk?: Maybe<Employee>;
  /** fetch data from the table: "event_type" */
  event_type: Array<EventType>;
  /** fetch aggregated fields from the table: "event_type" */
  event_type_aggregate: EventTypeAggregate;
  /** fetch data from the table: "event_type" using primary key columns */
  event_type_by_pk?: Maybe<EventType>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: RoleAggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "screenshot" */
  screenshot: Array<Screenshot>;
  /** fetch aggregated fields from the table: "screenshot" */
  screenshot_aggregate: ScreenshotAggregate;
  /** fetch data from the table: "screenshot" using primary key columns */
  screenshot_by_pk?: Maybe<Screenshot>;
  /** fetch data from the table: "task" */
  task: Array<Task>;
  /** fetch aggregated fields from the table: "task" */
  task_aggregate: TaskAggregate;
  /** fetch data from the table: "task" using primary key columns */
  task_by_pk?: Maybe<Task>;
  /** fetch data from the table: "time_log" */
  time_log: Array<TimeLog>;
  /** fetch aggregated fields from the table: "time_log" */
  time_log_aggregate: TimeLogAggregate;
  /** fetch data from the table: "time_log" using primary key columns */
  time_log_by_pk?: Maybe<TimeLog>;
  /** fetch data from the table: "time_slot" */
  time_slot: Array<TimeSlot>;
  /** fetch aggregated fields from the table: "time_slot" */
  time_slot_aggregate: TimeSlotAggregate;
  /** fetch data from the table: "time_slot" using primary key columns */
  time_slot_by_pk?: Maybe<TimeSlot>;
  /** fetch data from the table: "time_slot_minute" */
  time_slot_minute: Array<TimeSlotMinute>;
  /** fetch aggregated fields from the table: "time_slot_minute" */
  time_slot_minute_aggregate: TimeSlotMinuteAggregate;
  /** fetch data from the table: "time_slot_minute" using primary key columns */
  time_slot_minute_by_pk?: Maybe<TimeSlotMinute>;
  /** fetch data from the table: "time_slot_time_logs" */
  time_slot_time_logs: Array<TimeSlotTimeLogs>;
  /** fetch aggregated fields from the table: "time_slot_time_logs" */
  time_slot_time_logs_aggregate: TimeSlotTimeLogsAggregate;
  /** fetch data from the table: "time_slot_time_logs" using primary key columns */
  time_slot_time_logs_by_pk?: Maybe<TimeSlotTimeLogs>;
  /** fetch data from the table: "timesheet" */
  timesheet: Array<Timesheet>;
  /** fetch aggregated fields from the table: "timesheet" */
  timesheet_aggregate: TimesheetAggregate;
  /** fetch data from the table: "timesheet" using primary key columns */
  timesheet_by_pk?: Maybe<Timesheet>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};

/** subscription root */
export type SubscriptionRootActivityArgs = {
  distinct_on?: Maybe<Array<ActivitySelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ActivityOrderBy>>;
  where?: Maybe<ActivityBoolExp>;
};

/** subscription root */
export type SubscriptionRootActivityAggregateArgs = {
  distinct_on?: Maybe<Array<ActivitySelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ActivityOrderBy>>;
  where?: Maybe<ActivityBoolExp>;
};

/** subscription root */
export type SubscriptionRootActivityByPkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type SubscriptionRootAppointmentEmployeeArgs = {
  distinct_on?: Maybe<Array<AppointmentEmployeeSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<AppointmentEmployeeOrderBy>>;
  where?: Maybe<AppointmentEmployeeBoolExp>;
};

/** subscription root */
export type SubscriptionRootAppointmentEmployeeAggregateArgs = {
  distinct_on?: Maybe<Array<AppointmentEmployeeSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<AppointmentEmployeeOrderBy>>;
  where?: Maybe<AppointmentEmployeeBoolExp>;
};

/** subscription root */
export type SubscriptionRootAppointmentEmployeeByPkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type SubscriptionRootAvailabilitySlotArgs = {
  distinct_on?: Maybe<Array<AvailabilitySlotSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<AvailabilitySlotOrderBy>>;
  where?: Maybe<AvailabilitySlotBoolExp>;
};

/** subscription root */
export type SubscriptionRootAvailabilitySlotAggregateArgs = {
  distinct_on?: Maybe<Array<AvailabilitySlotSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<AvailabilitySlotOrderBy>>;
  where?: Maybe<AvailabilitySlotBoolExp>;
};

/** subscription root */
export type SubscriptionRootAvailabilitySlotByPkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type SubscriptionRootContactArgs = {
  distinct_on?: Maybe<Array<ContactSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ContactOrderBy>>;
  where?: Maybe<ContactBoolExp>;
};

/** subscription root */
export type SubscriptionRootContactAggregateArgs = {
  distinct_on?: Maybe<Array<ContactSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ContactOrderBy>>;
  where?: Maybe<ContactBoolExp>;
};

/** subscription root */
export type SubscriptionRootContactByPkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type SubscriptionRootEmployeeArgs = {
  distinct_on?: Maybe<Array<EmployeeSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<EmployeeOrderBy>>;
  where?: Maybe<EmployeeBoolExp>;
};

/** subscription root */
export type SubscriptionRootEmployeeAggregateArgs = {
  distinct_on?: Maybe<Array<EmployeeSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<EmployeeOrderBy>>;
  where?: Maybe<EmployeeBoolExp>;
};

/** subscription root */
export type SubscriptionRootEmployeeAppointmentArgs = {
  distinct_on?: Maybe<Array<EmployeeAppointmentSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<EmployeeAppointmentOrderBy>>;
  where?: Maybe<EmployeeAppointmentBoolExp>;
};

/** subscription root */
export type SubscriptionRootEmployeeAppointmentAggregateArgs = {
  distinct_on?: Maybe<Array<EmployeeAppointmentSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<EmployeeAppointmentOrderBy>>;
  where?: Maybe<EmployeeAppointmentBoolExp>;
};

/** subscription root */
export type SubscriptionRootEmployeeAppointmentByPkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type SubscriptionRootEmployeeByPkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type SubscriptionRootEventTypeArgs = {
  distinct_on?: Maybe<Array<EventTypeSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<EventTypeOrderBy>>;
  where?: Maybe<EventTypeBoolExp>;
};

/** subscription root */
export type SubscriptionRootEventTypeAggregateArgs = {
  distinct_on?: Maybe<Array<EventTypeSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<EventTypeOrderBy>>;
  where?: Maybe<EventTypeBoolExp>;
};

/** subscription root */
export type SubscriptionRootEventTypeByPkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type SubscriptionRootRoleArgs = {
  distinct_on?: Maybe<Array<RoleSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RoleOrderBy>>;
  where?: Maybe<RoleBoolExp>;
};

/** subscription root */
export type SubscriptionRootRoleAggregateArgs = {
  distinct_on?: Maybe<Array<RoleSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<RoleOrderBy>>;
  where?: Maybe<RoleBoolExp>;
};

/** subscription root */
export type SubscriptionRootRoleByPkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type SubscriptionRootScreenshotArgs = {
  distinct_on?: Maybe<Array<ScreenshotSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ScreenshotOrderBy>>;
  where?: Maybe<ScreenshotBoolExp>;
};

/** subscription root */
export type SubscriptionRootScreenshotAggregateArgs = {
  distinct_on?: Maybe<Array<ScreenshotSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ScreenshotOrderBy>>;
  where?: Maybe<ScreenshotBoolExp>;
};

/** subscription root */
export type SubscriptionRootScreenshotByPkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type SubscriptionRootTaskArgs = {
  distinct_on?: Maybe<Array<TaskSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TaskOrderBy>>;
  where?: Maybe<TaskBoolExp>;
};

/** subscription root */
export type SubscriptionRootTaskAggregateArgs = {
  distinct_on?: Maybe<Array<TaskSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TaskOrderBy>>;
  where?: Maybe<TaskBoolExp>;
};

/** subscription root */
export type SubscriptionRootTaskByPkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type SubscriptionRootTimeLogArgs = {
  distinct_on?: Maybe<Array<TimeLogSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeLogOrderBy>>;
  where?: Maybe<TimeLogBoolExp>;
};

/** subscription root */
export type SubscriptionRootTimeLogAggregateArgs = {
  distinct_on?: Maybe<Array<TimeLogSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeLogOrderBy>>;
  where?: Maybe<TimeLogBoolExp>;
};

/** subscription root */
export type SubscriptionRootTimeLogByPkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type SubscriptionRootTimeSlotArgs = {
  distinct_on?: Maybe<Array<TimeSlotSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeSlotOrderBy>>;
  where?: Maybe<TimeSlotBoolExp>;
};

/** subscription root */
export type SubscriptionRootTimeSlotAggregateArgs = {
  distinct_on?: Maybe<Array<TimeSlotSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeSlotOrderBy>>;
  where?: Maybe<TimeSlotBoolExp>;
};

/** subscription root */
export type SubscriptionRootTimeSlotByPkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type SubscriptionRootTimeSlotMinuteArgs = {
  distinct_on?: Maybe<Array<TimeSlotMinuteSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeSlotMinuteOrderBy>>;
  where?: Maybe<TimeSlotMinuteBoolExp>;
};

/** subscription root */
export type SubscriptionRootTimeSlotMinuteAggregateArgs = {
  distinct_on?: Maybe<Array<TimeSlotMinuteSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeSlotMinuteOrderBy>>;
  where?: Maybe<TimeSlotMinuteBoolExp>;
};

/** subscription root */
export type SubscriptionRootTimeSlotMinuteByPkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type SubscriptionRootTimeSlotTimeLogsArgs = {
  distinct_on?: Maybe<Array<TimeSlotTimeLogsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeSlotTimeLogsOrderBy>>;
  where?: Maybe<TimeSlotTimeLogsBoolExp>;
};

/** subscription root */
export type SubscriptionRootTimeSlotTimeLogsAggregateArgs = {
  distinct_on?: Maybe<Array<TimeSlotTimeLogsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeSlotTimeLogsOrderBy>>;
  where?: Maybe<TimeSlotTimeLogsBoolExp>;
};

/** subscription root */
export type SubscriptionRootTimeSlotTimeLogsByPkArgs = {
  timeLogId: Scalars["uuid"];
  timeSlotId: Scalars["uuid"];
};

/** subscription root */
export type SubscriptionRootTimesheetArgs = {
  distinct_on?: Maybe<Array<TimesheetSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimesheetOrderBy>>;
  where?: Maybe<TimesheetBoolExp>;
};

/** subscription root */
export type SubscriptionRootTimesheetAggregateArgs = {
  distinct_on?: Maybe<Array<TimesheetSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimesheetOrderBy>>;
  where?: Maybe<TimesheetBoolExp>;
};

/** subscription root */
export type SubscriptionRootTimesheetByPkArgs = {
  id: Scalars["uuid"];
};

/** subscription root */
export type SubscriptionRootUserArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
};

/** subscription root */
export type SubscriptionRootUserAggregateArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<UserOrderBy>>;
  where?: Maybe<UserBoolExp>;
};

/** subscription root */
export type SubscriptionRootUserByPkArgs = {
  id: Scalars["uuid"];
};

/** columns and relationships of "task" */
export type Task = {
  __typename?: "task";
  /** An array relationship */
  activities: Array<Activity>;
  /** An aggregated array relationship */
  activities_aggregate: ActivityAggregate;
  createdAt: Scalars["timestamp"];
  creatorId: Scalars["uuid"];
  description?: Maybe<Scalars["String"]>;
  dueDate?: Maybe<Scalars["timestamp"]>;
  estimate?: Maybe<Scalars["Int"]>;
  id: Scalars["uuid"];
  organizationId?: Maybe<Scalars["uuid"]>;
  organizationSprintId?: Maybe<Scalars["uuid"]>;
  projectId?: Maybe<Scalars["uuid"]>;
  status: Scalars["String"];
  tenantId?: Maybe<Scalars["uuid"]>;
  /** An array relationship */
  time_logs: Array<TimeLog>;
  /** An aggregated array relationship */
  time_logs_aggregate: TimeLogAggregate;
  title: Scalars["String"];
  updatedAt: Scalars["timestamp"];
  /** An object relationship */
  user: User;
};

/** columns and relationships of "task" */
export type TaskActivitiesArgs = {
  distinct_on?: Maybe<Array<ActivitySelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ActivityOrderBy>>;
  where?: Maybe<ActivityBoolExp>;
};

/** columns and relationships of "task" */
export type TaskActivitiesAggregateArgs = {
  distinct_on?: Maybe<Array<ActivitySelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ActivityOrderBy>>;
  where?: Maybe<ActivityBoolExp>;
};

/** columns and relationships of "task" */
export type TaskTimeLogsArgs = {
  distinct_on?: Maybe<Array<TimeLogSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeLogOrderBy>>;
  where?: Maybe<TimeLogBoolExp>;
};

/** columns and relationships of "task" */
export type TaskTimeLogsAggregateArgs = {
  distinct_on?: Maybe<Array<TimeLogSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeLogOrderBy>>;
  where?: Maybe<TimeLogBoolExp>;
};

/** aggregated selection of "task" */
export type TaskAggregate = {
  __typename?: "task_aggregate";
  aggregate?: Maybe<TaskAggregateFields>;
  nodes: Array<Task>;
};

/** aggregate fields of "task" */
export type TaskAggregateFields = {
  __typename?: "task_aggregate_fields";
  avg?: Maybe<TaskAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<TaskMaxFields>;
  min?: Maybe<TaskMinFields>;
  stddev?: Maybe<TaskStddevFields>;
  stddev_pop?: Maybe<TaskStddevPopFields>;
  stddev_samp?: Maybe<TaskStddevSampFields>;
  sum?: Maybe<TaskSumFields>;
  var_pop?: Maybe<TaskVarPopFields>;
  var_samp?: Maybe<TaskVarSampFields>;
  variance?: Maybe<TaskVarianceFields>;
};

/** aggregate fields of "task" */
export type TaskAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TaskSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "task" */
export type TaskAggregateOrderBy = {
  avg?: Maybe<TaskAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<TaskMaxOrderBy>;
  min?: Maybe<TaskMinOrderBy>;
  stddev?: Maybe<TaskStddevOrderBy>;
  stddev_pop?: Maybe<TaskStddevPopOrderBy>;
  stddev_samp?: Maybe<TaskStddevSampOrderBy>;
  sum?: Maybe<TaskSumOrderBy>;
  var_pop?: Maybe<TaskVarPopOrderBy>;
  var_samp?: Maybe<TaskVarSampOrderBy>;
  variance?: Maybe<TaskVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "task" */
export type TaskArrRelInsertInput = {
  data: Array<TaskInsertInput>;
  on_conflict?: Maybe<TaskOnConflict>;
};

/** aggregate avg on columns */
export type TaskAvgFields = {
  __typename?: "task_avg_fields";
  estimate?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "task" */
export type TaskAvgOrderBy = {
  estimate?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "task". All fields are combined with a logical 'AND'. */
export type TaskBoolExp = {
  _and?: Maybe<Array<Maybe<TaskBoolExp>>>;
  _not?: Maybe<TaskBoolExp>;
  _or?: Maybe<Array<Maybe<TaskBoolExp>>>;
  activities?: Maybe<ActivityBoolExp>;
  createdAt?: Maybe<TimestampComparisonExp>;
  creatorId?: Maybe<UuidComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  dueDate?: Maybe<TimestampComparisonExp>;
  estimate?: Maybe<IntComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  organizationId?: Maybe<UuidComparisonExp>;
  organizationSprintId?: Maybe<UuidComparisonExp>;
  projectId?: Maybe<UuidComparisonExp>;
  status?: Maybe<StringComparisonExp>;
  tenantId?: Maybe<UuidComparisonExp>;
  time_logs?: Maybe<TimeLogBoolExp>;
  title?: Maybe<StringComparisonExp>;
  updatedAt?: Maybe<TimestampComparisonExp>;
  user?: Maybe<UserBoolExp>;
};

/** unique or primary key constraints on table "task" */
export enum TaskConstraint {
  /** unique or primary key constraint */
  PkFb213f79ee45060ba925ecd576e = "PK_fb213f79ee45060ba925ecd576e"
}

/** input type for incrementing integer column in table "task" */
export type TaskIncInput = {
  estimate?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "task" */
export type TaskInsertInput = {
  activities?: Maybe<ActivityArrRelInsertInput>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  creatorId?: Maybe<Scalars["uuid"]>;
  description?: Maybe<Scalars["String"]>;
  dueDate?: Maybe<Scalars["timestamp"]>;
  estimate?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  organizationSprintId?: Maybe<Scalars["uuid"]>;
  projectId?: Maybe<Scalars["uuid"]>;
  status?: Maybe<Scalars["String"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  time_logs?: Maybe<TimeLogArrRelInsertInput>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
  user?: Maybe<UserObjRelInsertInput>;
};

/** aggregate max on columns */
export type TaskMaxFields = {
  __typename?: "task_max_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  creatorId?: Maybe<Scalars["uuid"]>;
  description?: Maybe<Scalars["String"]>;
  dueDate?: Maybe<Scalars["timestamp"]>;
  estimate?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  organizationSprintId?: Maybe<Scalars["uuid"]>;
  projectId?: Maybe<Scalars["uuid"]>;
  status?: Maybe<Scalars["String"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by max() on columns of table "task" */
export type TaskMaxOrderBy = {
  createdAt?: Maybe<OrderBy>;
  creatorId?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  dueDate?: Maybe<OrderBy>;
  estimate?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  organizationSprintId?: Maybe<OrderBy>;
  projectId?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type TaskMinFields = {
  __typename?: "task_min_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  creatorId?: Maybe<Scalars["uuid"]>;
  description?: Maybe<Scalars["String"]>;
  dueDate?: Maybe<Scalars["timestamp"]>;
  estimate?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  organizationSprintId?: Maybe<Scalars["uuid"]>;
  projectId?: Maybe<Scalars["uuid"]>;
  status?: Maybe<Scalars["String"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by min() on columns of table "task" */
export type TaskMinOrderBy = {
  createdAt?: Maybe<OrderBy>;
  creatorId?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  dueDate?: Maybe<OrderBy>;
  estimate?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  organizationSprintId?: Maybe<OrderBy>;
  projectId?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** response of any mutation on the table "task" */
export type TaskMutationResponse = {
  __typename?: "task_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Task>;
};

/** input type for inserting object relation for remote table "task" */
export type TaskObjRelInsertInput = {
  data: TaskInsertInput;
  on_conflict?: Maybe<TaskOnConflict>;
};

/** on conflict condition type for table "task" */
export type TaskOnConflict = {
  constraint: TaskConstraint;
  update_columns: Array<TaskUpdateColumn>;
  where?: Maybe<TaskBoolExp>;
};

/** ordering options when selecting data from "task" */
export type TaskOrderBy = {
  activities_aggregate?: Maybe<ActivityAggregateOrderBy>;
  createdAt?: Maybe<OrderBy>;
  creatorId?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  dueDate?: Maybe<OrderBy>;
  estimate?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  organizationSprintId?: Maybe<OrderBy>;
  projectId?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  time_logs_aggregate?: Maybe<TimeLogAggregateOrderBy>;
  title?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  user?: Maybe<UserOrderBy>;
};

/** primary key columns input for table: "task" */
export type TaskPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "task" */
export enum TaskSelectColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  CreatorId = "creatorId",
  /** column name */
  Description = "description",
  /** column name */
  DueDate = "dueDate",
  /** column name */
  Estimate = "estimate",
  /** column name */
  Id = "id",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  OrganizationSprintId = "organizationSprintId",
  /** column name */
  ProjectId = "projectId",
  /** column name */
  Status = "status",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** input type for updating data in table "task" */
export type TaskSetInput = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  creatorId?: Maybe<Scalars["uuid"]>;
  description?: Maybe<Scalars["String"]>;
  dueDate?: Maybe<Scalars["timestamp"]>;
  estimate?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  organizationSprintId?: Maybe<Scalars["uuid"]>;
  projectId?: Maybe<Scalars["uuid"]>;
  status?: Maybe<Scalars["String"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  title?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate stddev on columns */
export type TaskStddevFields = {
  __typename?: "task_stddev_fields";
  estimate?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "task" */
export type TaskStddevOrderBy = {
  estimate?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type TaskStddevPopFields = {
  __typename?: "task_stddev_pop_fields";
  estimate?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "task" */
export type TaskStddevPopOrderBy = {
  estimate?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type TaskStddevSampFields = {
  __typename?: "task_stddev_samp_fields";
  estimate?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "task" */
export type TaskStddevSampOrderBy = {
  estimate?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type TaskSumFields = {
  __typename?: "task_sum_fields";
  estimate?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "task" */
export type TaskSumOrderBy = {
  estimate?: Maybe<OrderBy>;
};

/** update columns of table "task" */
export enum TaskUpdateColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  CreatorId = "creatorId",
  /** column name */
  Description = "description",
  /** column name */
  DueDate = "dueDate",
  /** column name */
  Estimate = "estimate",
  /** column name */
  Id = "id",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  OrganizationSprintId = "organizationSprintId",
  /** column name */
  ProjectId = "projectId",
  /** column name */
  Status = "status",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** aggregate var_pop on columns */
export type TaskVarPopFields = {
  __typename?: "task_var_pop_fields";
  estimate?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "task" */
export type TaskVarPopOrderBy = {
  estimate?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type TaskVarSampFields = {
  __typename?: "task_var_samp_fields";
  estimate?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "task" */
export type TaskVarSampOrderBy = {
  estimate?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type TaskVarianceFields = {
  __typename?: "task_variance_fields";
  estimate?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "task" */
export type TaskVarianceOrderBy = {
  estimate?: Maybe<OrderBy>;
};

/** expression to compare columns of type time. All fields are combined with logical 'AND'. */
export type TimeComparisonExp = {
  _eq?: Maybe<Scalars["time"]>;
  _gt?: Maybe<Scalars["time"]>;
  _gte?: Maybe<Scalars["time"]>;
  _in?: Maybe<Array<Scalars["time"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["time"]>;
  _lte?: Maybe<Scalars["time"]>;
  _neq?: Maybe<Scalars["time"]>;
  _nin?: Maybe<Array<Scalars["time"]>>;
};

/** columns and relationships of "time_log" */
export type TimeLog = {
  __typename?: "time_log";
  createdAt: Scalars["timestamp"];
  deletedAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  /** An object relationship */
  employee: Employee;
  employeeId: Scalars["uuid"];
  id: Scalars["uuid"];
  isBillable: Scalars["Boolean"];
  logType: Scalars["String"];
  organizationContactId?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  projectId?: Maybe<Scalars["uuid"]>;
  reason?: Maybe<Scalars["String"]>;
  source: Scalars["String"];
  startedAt?: Maybe<Scalars["timestamp"]>;
  stoppedAt?: Maybe<Scalars["timestamp"]>;
  /** An object relationship */
  task?: Maybe<Task>;
  taskId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  /** An array relationship */
  time_slot_time_logs: Array<TimeSlotTimeLogs>;
  /** An aggregated array relationship */
  time_slot_time_logs_aggregate: TimeSlotTimeLogsAggregate;
  /** An object relationship */
  timesheet?: Maybe<Timesheet>;
  timesheetId?: Maybe<Scalars["uuid"]>;
  updatedAt: Scalars["timestamp"];
};

/** columns and relationships of "time_log" */
export type TimeLogTimeSlotTimeLogsArgs = {
  distinct_on?: Maybe<Array<TimeSlotTimeLogsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeSlotTimeLogsOrderBy>>;
  where?: Maybe<TimeSlotTimeLogsBoolExp>;
};

/** columns and relationships of "time_log" */
export type TimeLogTimeSlotTimeLogsAggregateArgs = {
  distinct_on?: Maybe<Array<TimeSlotTimeLogsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeSlotTimeLogsOrderBy>>;
  where?: Maybe<TimeSlotTimeLogsBoolExp>;
};

/** aggregated selection of "time_log" */
export type TimeLogAggregate = {
  __typename?: "time_log_aggregate";
  aggregate?: Maybe<TimeLogAggregateFields>;
  nodes: Array<TimeLog>;
};

/** aggregate fields of "time_log" */
export type TimeLogAggregateFields = {
  __typename?: "time_log_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<TimeLogMaxFields>;
  min?: Maybe<TimeLogMinFields>;
};

/** aggregate fields of "time_log" */
export type TimeLogAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TimeLogSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "time_log" */
export type TimeLogAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<TimeLogMaxOrderBy>;
  min?: Maybe<TimeLogMinOrderBy>;
};

/** input type for inserting array relation for remote table "time_log" */
export type TimeLogArrRelInsertInput = {
  data: Array<TimeLogInsertInput>;
  on_conflict?: Maybe<TimeLogOnConflict>;
};

/** Boolean expression to filter rows from the table "time_log". All fields are combined with a logical 'AND'. */
export type TimeLogBoolExp = {
  _and?: Maybe<Array<Maybe<TimeLogBoolExp>>>;
  _not?: Maybe<TimeLogBoolExp>;
  _or?: Maybe<Array<Maybe<TimeLogBoolExp>>>;
  createdAt?: Maybe<TimestampComparisonExp>;
  deletedAt?: Maybe<TimestampComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  employee?: Maybe<EmployeeBoolExp>;
  employeeId?: Maybe<UuidComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  isBillable?: Maybe<BooleanComparisonExp>;
  logType?: Maybe<StringComparisonExp>;
  organizationContactId?: Maybe<UuidComparisonExp>;
  organizationId?: Maybe<UuidComparisonExp>;
  projectId?: Maybe<UuidComparisonExp>;
  reason?: Maybe<StringComparisonExp>;
  source?: Maybe<StringComparisonExp>;
  startedAt?: Maybe<TimestampComparisonExp>;
  stoppedAt?: Maybe<TimestampComparisonExp>;
  task?: Maybe<TaskBoolExp>;
  taskId?: Maybe<UuidComparisonExp>;
  tenantId?: Maybe<UuidComparisonExp>;
  time_slot_time_logs?: Maybe<TimeSlotTimeLogsBoolExp>;
  timesheet?: Maybe<TimesheetBoolExp>;
  timesheetId?: Maybe<UuidComparisonExp>;
  updatedAt?: Maybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "time_log" */
export enum TimeLogConstraint {
  /** unique or primary key constraint */
  PkB74817f73944f78f239601069f2 = "PK_b74817f73944f78f239601069f2"
}

/** input type for inserting data into table "time_log" */
export type TimeLogInsertInput = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  deletedAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  employee?: Maybe<EmployeeObjRelInsertInput>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  isBillable?: Maybe<Scalars["Boolean"]>;
  logType?: Maybe<Scalars["String"]>;
  organizationContactId?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  projectId?: Maybe<Scalars["uuid"]>;
  reason?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  startedAt?: Maybe<Scalars["timestamp"]>;
  stoppedAt?: Maybe<Scalars["timestamp"]>;
  task?: Maybe<TaskObjRelInsertInput>;
  taskId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  time_slot_time_logs?: Maybe<TimeSlotTimeLogsArrRelInsertInput>;
  timesheet?: Maybe<TimesheetObjRelInsertInput>;
  timesheetId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate max on columns */
export type TimeLogMaxFields = {
  __typename?: "time_log_max_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  deletedAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  logType?: Maybe<Scalars["String"]>;
  organizationContactId?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  projectId?: Maybe<Scalars["uuid"]>;
  reason?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  startedAt?: Maybe<Scalars["timestamp"]>;
  stoppedAt?: Maybe<Scalars["timestamp"]>;
  taskId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  timesheetId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by max() on columns of table "time_log" */
export type TimeLogMaxOrderBy = {
  createdAt?: Maybe<OrderBy>;
  deletedAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  employeeId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  logType?: Maybe<OrderBy>;
  organizationContactId?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  projectId?: Maybe<OrderBy>;
  reason?: Maybe<OrderBy>;
  source?: Maybe<OrderBy>;
  startedAt?: Maybe<OrderBy>;
  stoppedAt?: Maybe<OrderBy>;
  taskId?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  timesheetId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type TimeLogMinFields = {
  __typename?: "time_log_min_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  deletedAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  logType?: Maybe<Scalars["String"]>;
  organizationContactId?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  projectId?: Maybe<Scalars["uuid"]>;
  reason?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  startedAt?: Maybe<Scalars["timestamp"]>;
  stoppedAt?: Maybe<Scalars["timestamp"]>;
  taskId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  timesheetId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by min() on columns of table "time_log" */
export type TimeLogMinOrderBy = {
  createdAt?: Maybe<OrderBy>;
  deletedAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  employeeId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  logType?: Maybe<OrderBy>;
  organizationContactId?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  projectId?: Maybe<OrderBy>;
  reason?: Maybe<OrderBy>;
  source?: Maybe<OrderBy>;
  startedAt?: Maybe<OrderBy>;
  stoppedAt?: Maybe<OrderBy>;
  taskId?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  timesheetId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** response of any mutation on the table "time_log" */
export type TimeLogMutationResponse = {
  __typename?: "time_log_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<TimeLog>;
};

/** input type for inserting object relation for remote table "time_log" */
export type TimeLogObjRelInsertInput = {
  data: TimeLogInsertInput;
  on_conflict?: Maybe<TimeLogOnConflict>;
};

/** on conflict condition type for table "time_log" */
export type TimeLogOnConflict = {
  constraint: TimeLogConstraint;
  update_columns: Array<TimeLogUpdateColumn>;
  where?: Maybe<TimeLogBoolExp>;
};

/** ordering options when selecting data from "time_log" */
export type TimeLogOrderBy = {
  createdAt?: Maybe<OrderBy>;
  deletedAt?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  employee?: Maybe<EmployeeOrderBy>;
  employeeId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  isBillable?: Maybe<OrderBy>;
  logType?: Maybe<OrderBy>;
  organizationContactId?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  projectId?: Maybe<OrderBy>;
  reason?: Maybe<OrderBy>;
  source?: Maybe<OrderBy>;
  startedAt?: Maybe<OrderBy>;
  stoppedAt?: Maybe<OrderBy>;
  task?: Maybe<TaskOrderBy>;
  taskId?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  time_slot_time_logs_aggregate?: Maybe<TimeSlotTimeLogsAggregateOrderBy>;
  timesheet?: Maybe<TimesheetOrderBy>;
  timesheetId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: "time_log" */
export type TimeLogPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "time_log" */
export enum TimeLogSelectColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Description = "description",
  /** column name */
  EmployeeId = "employeeId",
  /** column name */
  Id = "id",
  /** column name */
  IsBillable = "isBillable",
  /** column name */
  LogType = "logType",
  /** column name */
  OrganizationContactId = "organizationContactId",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  ProjectId = "projectId",
  /** column name */
  Reason = "reason",
  /** column name */
  Source = "source",
  /** column name */
  StartedAt = "startedAt",
  /** column name */
  StoppedAt = "stoppedAt",
  /** column name */
  TaskId = "taskId",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  TimesheetId = "timesheetId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** input type for updating data in table "time_log" */
export type TimeLogSetInput = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  deletedAt?: Maybe<Scalars["timestamp"]>;
  description?: Maybe<Scalars["String"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  isBillable?: Maybe<Scalars["Boolean"]>;
  logType?: Maybe<Scalars["String"]>;
  organizationContactId?: Maybe<Scalars["uuid"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  projectId?: Maybe<Scalars["uuid"]>;
  reason?: Maybe<Scalars["String"]>;
  source?: Maybe<Scalars["String"]>;
  startedAt?: Maybe<Scalars["timestamp"]>;
  stoppedAt?: Maybe<Scalars["timestamp"]>;
  taskId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  timesheetId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** update columns of table "time_log" */
export enum TimeLogUpdateColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Description = "description",
  /** column name */
  EmployeeId = "employeeId",
  /** column name */
  Id = "id",
  /** column name */
  IsBillable = "isBillable",
  /** column name */
  LogType = "logType",
  /** column name */
  OrganizationContactId = "organizationContactId",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  ProjectId = "projectId",
  /** column name */
  Reason = "reason",
  /** column name */
  Source = "source",
  /** column name */
  StartedAt = "startedAt",
  /** column name */
  StoppedAt = "stoppedAt",
  /** column name */
  TaskId = "taskId",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  TimesheetId = "timesheetId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** columns and relationships of "time_slot" */
export type TimeSlot = {
  __typename?: "time_slot";
  /** An array relationship */
  activities: Array<Activity>;
  /** An aggregated array relationship */
  activities_aggregate: ActivityAggregate;
  createdAt: Scalars["timestamp"];
  duration: Scalars["Int"];
  /** An object relationship */
  employee: Employee;
  employeeId: Scalars["uuid"];
  id: Scalars["uuid"];
  keyboard: Scalars["Int"];
  mouse: Scalars["Int"];
  organizationId?: Maybe<Scalars["uuid"]>;
  overall: Scalars["Int"];
  /** An array relationship */
  screenshots: Array<Screenshot>;
  /** An aggregated array relationship */
  screenshots_aggregate: ScreenshotAggregate;
  startedAt: Scalars["timestamp"];
  tenantId?: Maybe<Scalars["uuid"]>;
  /** An array relationship */
  time_slot_minutes: Array<TimeSlotMinute>;
  /** An aggregated array relationship */
  time_slot_minutes_aggregate: TimeSlotMinuteAggregate;
  /** An array relationship */
  time_slot_time_logs: Array<TimeSlotTimeLogs>;
  /** An aggregated array relationship */
  time_slot_time_logs_aggregate: TimeSlotTimeLogsAggregate;
  updatedAt: Scalars["timestamp"];
};

/** columns and relationships of "time_slot" */
export type TimeSlotActivitiesArgs = {
  distinct_on?: Maybe<Array<ActivitySelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ActivityOrderBy>>;
  where?: Maybe<ActivityBoolExp>;
};

/** columns and relationships of "time_slot" */
export type TimeSlotActivitiesAggregateArgs = {
  distinct_on?: Maybe<Array<ActivitySelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ActivityOrderBy>>;
  where?: Maybe<ActivityBoolExp>;
};

/** columns and relationships of "time_slot" */
export type TimeSlotScreenshotsArgs = {
  distinct_on?: Maybe<Array<ScreenshotSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ScreenshotOrderBy>>;
  where?: Maybe<ScreenshotBoolExp>;
};

/** columns and relationships of "time_slot" */
export type TimeSlotScreenshotsAggregateArgs = {
  distinct_on?: Maybe<Array<ScreenshotSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<ScreenshotOrderBy>>;
  where?: Maybe<ScreenshotBoolExp>;
};

/** columns and relationships of "time_slot" */
export type TimeSlotTimeSlotMinutesArgs = {
  distinct_on?: Maybe<Array<TimeSlotMinuteSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeSlotMinuteOrderBy>>;
  where?: Maybe<TimeSlotMinuteBoolExp>;
};

/** columns and relationships of "time_slot" */
export type TimeSlotTimeSlotMinutesAggregateArgs = {
  distinct_on?: Maybe<Array<TimeSlotMinuteSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeSlotMinuteOrderBy>>;
  where?: Maybe<TimeSlotMinuteBoolExp>;
};

/** columns and relationships of "time_slot" */
export type TimeSlotTimeSlotTimeLogsArgs = {
  distinct_on?: Maybe<Array<TimeSlotTimeLogsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeSlotTimeLogsOrderBy>>;
  where?: Maybe<TimeSlotTimeLogsBoolExp>;
};

/** columns and relationships of "time_slot" */
export type TimeSlotTimeSlotTimeLogsAggregateArgs = {
  distinct_on?: Maybe<Array<TimeSlotTimeLogsSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeSlotTimeLogsOrderBy>>;
  where?: Maybe<TimeSlotTimeLogsBoolExp>;
};

/** aggregated selection of "time_slot" */
export type TimeSlotAggregate = {
  __typename?: "time_slot_aggregate";
  aggregate?: Maybe<TimeSlotAggregateFields>;
  nodes: Array<TimeSlot>;
};

/** aggregate fields of "time_slot" */
export type TimeSlotAggregateFields = {
  __typename?: "time_slot_aggregate_fields";
  avg?: Maybe<TimeSlotAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<TimeSlotMaxFields>;
  min?: Maybe<TimeSlotMinFields>;
  stddev?: Maybe<TimeSlotStddevFields>;
  stddev_pop?: Maybe<TimeSlotStddevPopFields>;
  stddev_samp?: Maybe<TimeSlotStddevSampFields>;
  sum?: Maybe<TimeSlotSumFields>;
  var_pop?: Maybe<TimeSlotVarPopFields>;
  var_samp?: Maybe<TimeSlotVarSampFields>;
  variance?: Maybe<TimeSlotVarianceFields>;
};

/** aggregate fields of "time_slot" */
export type TimeSlotAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TimeSlotSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "time_slot" */
export type TimeSlotAggregateOrderBy = {
  avg?: Maybe<TimeSlotAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<TimeSlotMaxOrderBy>;
  min?: Maybe<TimeSlotMinOrderBy>;
  stddev?: Maybe<TimeSlotStddevOrderBy>;
  stddev_pop?: Maybe<TimeSlotStddevPopOrderBy>;
  stddev_samp?: Maybe<TimeSlotStddevSampOrderBy>;
  sum?: Maybe<TimeSlotSumOrderBy>;
  var_pop?: Maybe<TimeSlotVarPopOrderBy>;
  var_samp?: Maybe<TimeSlotVarSampOrderBy>;
  variance?: Maybe<TimeSlotVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "time_slot" */
export type TimeSlotArrRelInsertInput = {
  data: Array<TimeSlotInsertInput>;
  on_conflict?: Maybe<TimeSlotOnConflict>;
};

/** aggregate avg on columns */
export type TimeSlotAvgFields = {
  __typename?: "time_slot_avg_fields";
  duration?: Maybe<Scalars["Float"]>;
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
  overall?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "time_slot" */
export type TimeSlotAvgOrderBy = {
  duration?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "time_slot". All fields are combined with a logical 'AND'. */
export type TimeSlotBoolExp = {
  _and?: Maybe<Array<Maybe<TimeSlotBoolExp>>>;
  _not?: Maybe<TimeSlotBoolExp>;
  _or?: Maybe<Array<Maybe<TimeSlotBoolExp>>>;
  activities?: Maybe<ActivityBoolExp>;
  createdAt?: Maybe<TimestampComparisonExp>;
  duration?: Maybe<IntComparisonExp>;
  employee?: Maybe<EmployeeBoolExp>;
  employeeId?: Maybe<UuidComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  keyboard?: Maybe<IntComparisonExp>;
  mouse?: Maybe<IntComparisonExp>;
  organizationId?: Maybe<UuidComparisonExp>;
  overall?: Maybe<IntComparisonExp>;
  screenshots?: Maybe<ScreenshotBoolExp>;
  startedAt?: Maybe<TimestampComparisonExp>;
  tenantId?: Maybe<UuidComparisonExp>;
  time_slot_minutes?: Maybe<TimeSlotMinuteBoolExp>;
  time_slot_time_logs?: Maybe<TimeSlotTimeLogsBoolExp>;
  updatedAt?: Maybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "time_slot" */
export enum TimeSlotConstraint {
  /** unique or primary key constraint */
  Pk_03f782f8c4af029253f6ad5bacf = "PK_03f782f8c4af029253f6ad5bacf"
}

/** input type for incrementing integer column in table "time_slot" */
export type TimeSlotIncInput = {
  duration?: Maybe<Scalars["Int"]>;
  keyboard?: Maybe<Scalars["Int"]>;
  mouse?: Maybe<Scalars["Int"]>;
  overall?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "time_slot" */
export type TimeSlotInsertInput = {
  activities?: Maybe<ActivityArrRelInsertInput>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  duration?: Maybe<Scalars["Int"]>;
  employee?: Maybe<EmployeeObjRelInsertInput>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  keyboard?: Maybe<Scalars["Int"]>;
  mouse?: Maybe<Scalars["Int"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  overall?: Maybe<Scalars["Int"]>;
  screenshots?: Maybe<ScreenshotArrRelInsertInput>;
  startedAt?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  time_slot_minutes?: Maybe<TimeSlotMinuteArrRelInsertInput>;
  time_slot_time_logs?: Maybe<TimeSlotTimeLogsArrRelInsertInput>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate max on columns */
export type TimeSlotMaxFields = {
  __typename?: "time_slot_max_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  duration?: Maybe<Scalars["Int"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  keyboard?: Maybe<Scalars["Int"]>;
  mouse?: Maybe<Scalars["Int"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  overall?: Maybe<Scalars["Int"]>;
  startedAt?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by max() on columns of table "time_slot" */
export type TimeSlotMaxOrderBy = {
  createdAt?: Maybe<OrderBy>;
  duration?: Maybe<OrderBy>;
  employeeId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
  startedAt?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type TimeSlotMinFields = {
  __typename?: "time_slot_min_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  duration?: Maybe<Scalars["Int"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  keyboard?: Maybe<Scalars["Int"]>;
  mouse?: Maybe<Scalars["Int"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  overall?: Maybe<Scalars["Int"]>;
  startedAt?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by min() on columns of table "time_slot" */
export type TimeSlotMinOrderBy = {
  createdAt?: Maybe<OrderBy>;
  duration?: Maybe<OrderBy>;
  employeeId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
  startedAt?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** columns and relationships of "time_slot_minute" */
export type TimeSlotMinute = {
  __typename?: "time_slot_minute";
  createdAt: Scalars["timestamp"];
  datetime: Scalars["timestamp"];
  id: Scalars["uuid"];
  keyboard: Scalars["Int"];
  mouse: Scalars["Int"];
  organizationId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  timeSlotId: Scalars["uuid"];
  /** An object relationship */
  time_slot: TimeSlot;
  updatedAt: Scalars["timestamp"];
};

/** aggregated selection of "time_slot_minute" */
export type TimeSlotMinuteAggregate = {
  __typename?: "time_slot_minute_aggregate";
  aggregate?: Maybe<TimeSlotMinuteAggregateFields>;
  nodes: Array<TimeSlotMinute>;
};

/** aggregate fields of "time_slot_minute" */
export type TimeSlotMinuteAggregateFields = {
  __typename?: "time_slot_minute_aggregate_fields";
  avg?: Maybe<TimeSlotMinuteAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<TimeSlotMinuteMaxFields>;
  min?: Maybe<TimeSlotMinuteMinFields>;
  stddev?: Maybe<TimeSlotMinuteStddevFields>;
  stddev_pop?: Maybe<TimeSlotMinuteStddevPopFields>;
  stddev_samp?: Maybe<TimeSlotMinuteStddevSampFields>;
  sum?: Maybe<TimeSlotMinuteSumFields>;
  var_pop?: Maybe<TimeSlotMinuteVarPopFields>;
  var_samp?: Maybe<TimeSlotMinuteVarSampFields>;
  variance?: Maybe<TimeSlotMinuteVarianceFields>;
};

/** aggregate fields of "time_slot_minute" */
export type TimeSlotMinuteAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TimeSlotMinuteSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "time_slot_minute" */
export type TimeSlotMinuteAggregateOrderBy = {
  avg?: Maybe<TimeSlotMinuteAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<TimeSlotMinuteMaxOrderBy>;
  min?: Maybe<TimeSlotMinuteMinOrderBy>;
  stddev?: Maybe<TimeSlotMinuteStddevOrderBy>;
  stddev_pop?: Maybe<TimeSlotMinuteStddevPopOrderBy>;
  stddev_samp?: Maybe<TimeSlotMinuteStddevSampOrderBy>;
  sum?: Maybe<TimeSlotMinuteSumOrderBy>;
  var_pop?: Maybe<TimeSlotMinuteVarPopOrderBy>;
  var_samp?: Maybe<TimeSlotMinuteVarSampOrderBy>;
  variance?: Maybe<TimeSlotMinuteVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "time_slot_minute" */
export type TimeSlotMinuteArrRelInsertInput = {
  data: Array<TimeSlotMinuteInsertInput>;
  on_conflict?: Maybe<TimeSlotMinuteOnConflict>;
};

/** aggregate avg on columns */
export type TimeSlotMinuteAvgFields = {
  __typename?: "time_slot_minute_avg_fields";
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "time_slot_minute" */
export type TimeSlotMinuteAvgOrderBy = {
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "time_slot_minute". All fields are combined with a logical 'AND'. */
export type TimeSlotMinuteBoolExp = {
  _and?: Maybe<Array<Maybe<TimeSlotMinuteBoolExp>>>;
  _not?: Maybe<TimeSlotMinuteBoolExp>;
  _or?: Maybe<Array<Maybe<TimeSlotMinuteBoolExp>>>;
  createdAt?: Maybe<TimestampComparisonExp>;
  datetime?: Maybe<TimestampComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  keyboard?: Maybe<IntComparisonExp>;
  mouse?: Maybe<IntComparisonExp>;
  organizationId?: Maybe<UuidComparisonExp>;
  tenantId?: Maybe<UuidComparisonExp>;
  timeSlotId?: Maybe<UuidComparisonExp>;
  time_slot?: Maybe<TimeSlotBoolExp>;
  updatedAt?: Maybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "time_slot_minute" */
export enum TimeSlotMinuteConstraint {
  /** unique or primary key constraint */
  Pk_620fe1f2b27a920a28c5b8398c2 = "PK_620fe1f2b27a920a28c5b8398c2",
  /** unique or primary key constraint */
  Uq_0ac1d2777eefcee82db52ca3660 = "UQ_0ac1d2777eefcee82db52ca3660"
}

/** input type for incrementing integer column in table "time_slot_minute" */
export type TimeSlotMinuteIncInput = {
  keyboard?: Maybe<Scalars["Int"]>;
  mouse?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "time_slot_minute" */
export type TimeSlotMinuteInsertInput = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  datetime?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  keyboard?: Maybe<Scalars["Int"]>;
  mouse?: Maybe<Scalars["Int"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  timeSlotId?: Maybe<Scalars["uuid"]>;
  time_slot?: Maybe<TimeSlotObjRelInsertInput>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate max on columns */
export type TimeSlotMinuteMaxFields = {
  __typename?: "time_slot_minute_max_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  datetime?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  keyboard?: Maybe<Scalars["Int"]>;
  mouse?: Maybe<Scalars["Int"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  timeSlotId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by max() on columns of table "time_slot_minute" */
export type TimeSlotMinuteMaxOrderBy = {
  createdAt?: Maybe<OrderBy>;
  datetime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  timeSlotId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type TimeSlotMinuteMinFields = {
  __typename?: "time_slot_minute_min_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  datetime?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  keyboard?: Maybe<Scalars["Int"]>;
  mouse?: Maybe<Scalars["Int"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  timeSlotId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by min() on columns of table "time_slot_minute" */
export type TimeSlotMinuteMinOrderBy = {
  createdAt?: Maybe<OrderBy>;
  datetime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  timeSlotId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** response of any mutation on the table "time_slot_minute" */
export type TimeSlotMinuteMutationResponse = {
  __typename?: "time_slot_minute_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<TimeSlotMinute>;
};

/** input type for inserting object relation for remote table "time_slot_minute" */
export type TimeSlotMinuteObjRelInsertInput = {
  data: TimeSlotMinuteInsertInput;
  on_conflict?: Maybe<TimeSlotMinuteOnConflict>;
};

/** on conflict condition type for table "time_slot_minute" */
export type TimeSlotMinuteOnConflict = {
  constraint: TimeSlotMinuteConstraint;
  update_columns: Array<TimeSlotMinuteUpdateColumn>;
  where?: Maybe<TimeSlotMinuteBoolExp>;
};

/** ordering options when selecting data from "time_slot_minute" */
export type TimeSlotMinuteOrderBy = {
  createdAt?: Maybe<OrderBy>;
  datetime?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  timeSlotId?: Maybe<OrderBy>;
  time_slot?: Maybe<TimeSlotOrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: "time_slot_minute" */
export type TimeSlotMinutePkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "time_slot_minute" */
export enum TimeSlotMinuteSelectColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Datetime = "datetime",
  /** column name */
  Id = "id",
  /** column name */
  Keyboard = "keyboard",
  /** column name */
  Mouse = "mouse",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  TimeSlotId = "timeSlotId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** input type for updating data in table "time_slot_minute" */
export type TimeSlotMinuteSetInput = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  datetime?: Maybe<Scalars["timestamp"]>;
  id?: Maybe<Scalars["uuid"]>;
  keyboard?: Maybe<Scalars["Int"]>;
  mouse?: Maybe<Scalars["Int"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  timeSlotId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate stddev on columns */
export type TimeSlotMinuteStddevFields = {
  __typename?: "time_slot_minute_stddev_fields";
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "time_slot_minute" */
export type TimeSlotMinuteStddevOrderBy = {
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type TimeSlotMinuteStddevPopFields = {
  __typename?: "time_slot_minute_stddev_pop_fields";
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "time_slot_minute" */
export type TimeSlotMinuteStddevPopOrderBy = {
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type TimeSlotMinuteStddevSampFields = {
  __typename?: "time_slot_minute_stddev_samp_fields";
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "time_slot_minute" */
export type TimeSlotMinuteStddevSampOrderBy = {
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type TimeSlotMinuteSumFields = {
  __typename?: "time_slot_minute_sum_fields";
  keyboard?: Maybe<Scalars["Int"]>;
  mouse?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "time_slot_minute" */
export type TimeSlotMinuteSumOrderBy = {
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
};

/** update columns of table "time_slot_minute" */
export enum TimeSlotMinuteUpdateColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Datetime = "datetime",
  /** column name */
  Id = "id",
  /** column name */
  Keyboard = "keyboard",
  /** column name */
  Mouse = "mouse",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  TimeSlotId = "timeSlotId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** aggregate var_pop on columns */
export type TimeSlotMinuteVarPopFields = {
  __typename?: "time_slot_minute_var_pop_fields";
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "time_slot_minute" */
export type TimeSlotMinuteVarPopOrderBy = {
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type TimeSlotMinuteVarSampFields = {
  __typename?: "time_slot_minute_var_samp_fields";
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "time_slot_minute" */
export type TimeSlotMinuteVarSampOrderBy = {
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type TimeSlotMinuteVarianceFields = {
  __typename?: "time_slot_minute_variance_fields";
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "time_slot_minute" */
export type TimeSlotMinuteVarianceOrderBy = {
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
};

/** response of any mutation on the table "time_slot" */
export type TimeSlotMutationResponse = {
  __typename?: "time_slot_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<TimeSlot>;
};

/** input type for inserting object relation for remote table "time_slot" */
export type TimeSlotObjRelInsertInput = {
  data: TimeSlotInsertInput;
  on_conflict?: Maybe<TimeSlotOnConflict>;
};

/** on conflict condition type for table "time_slot" */
export type TimeSlotOnConflict = {
  constraint: TimeSlotConstraint;
  update_columns: Array<TimeSlotUpdateColumn>;
  where?: Maybe<TimeSlotBoolExp>;
};

/** ordering options when selecting data from "time_slot" */
export type TimeSlotOrderBy = {
  activities_aggregate?: Maybe<ActivityAggregateOrderBy>;
  createdAt?: Maybe<OrderBy>;
  duration?: Maybe<OrderBy>;
  employee?: Maybe<EmployeeOrderBy>;
  employeeId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
  screenshots_aggregate?: Maybe<ScreenshotAggregateOrderBy>;
  startedAt?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  time_slot_minutes_aggregate?: Maybe<TimeSlotMinuteAggregateOrderBy>;
  time_slot_time_logs_aggregate?: Maybe<TimeSlotTimeLogsAggregateOrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: "time_slot" */
export type TimeSlotPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "time_slot" */
export enum TimeSlotSelectColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Duration = "duration",
  /** column name */
  EmployeeId = "employeeId",
  /** column name */
  Id = "id",
  /** column name */
  Keyboard = "keyboard",
  /** column name */
  Mouse = "mouse",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  Overall = "overall",
  /** column name */
  StartedAt = "startedAt",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** input type for updating data in table "time_slot" */
export type TimeSlotSetInput = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  duration?: Maybe<Scalars["Int"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  keyboard?: Maybe<Scalars["Int"]>;
  mouse?: Maybe<Scalars["Int"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  overall?: Maybe<Scalars["Int"]>;
  startedAt?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate stddev on columns */
export type TimeSlotStddevFields = {
  __typename?: "time_slot_stddev_fields";
  duration?: Maybe<Scalars["Float"]>;
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
  overall?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "time_slot" */
export type TimeSlotStddevOrderBy = {
  duration?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type TimeSlotStddevPopFields = {
  __typename?: "time_slot_stddev_pop_fields";
  duration?: Maybe<Scalars["Float"]>;
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
  overall?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "time_slot" */
export type TimeSlotStddevPopOrderBy = {
  duration?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type TimeSlotStddevSampFields = {
  __typename?: "time_slot_stddev_samp_fields";
  duration?: Maybe<Scalars["Float"]>;
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
  overall?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "time_slot" */
export type TimeSlotStddevSampOrderBy = {
  duration?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type TimeSlotSumFields = {
  __typename?: "time_slot_sum_fields";
  duration?: Maybe<Scalars["Int"]>;
  keyboard?: Maybe<Scalars["Int"]>;
  mouse?: Maybe<Scalars["Int"]>;
  overall?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "time_slot" */
export type TimeSlotSumOrderBy = {
  duration?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
};

/** columns and relationships of "time_slot_time_logs" */
export type TimeSlotTimeLogs = {
  __typename?: "time_slot_time_logs";
  timeLogId: Scalars["uuid"];
  timeSlotId: Scalars["uuid"];
  /** An object relationship */
  time_log: TimeLog;
  /** An object relationship */
  time_slot: TimeSlot;
};

/** aggregated selection of "time_slot_time_logs" */
export type TimeSlotTimeLogsAggregate = {
  __typename?: "time_slot_time_logs_aggregate";
  aggregate?: Maybe<TimeSlotTimeLogsAggregateFields>;
  nodes: Array<TimeSlotTimeLogs>;
};

/** aggregate fields of "time_slot_time_logs" */
export type TimeSlotTimeLogsAggregateFields = {
  __typename?: "time_slot_time_logs_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<TimeSlotTimeLogsMaxFields>;
  min?: Maybe<TimeSlotTimeLogsMinFields>;
};

/** aggregate fields of "time_slot_time_logs" */
export type TimeSlotTimeLogsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TimeSlotTimeLogsSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "time_slot_time_logs" */
export type TimeSlotTimeLogsAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<TimeSlotTimeLogsMaxOrderBy>;
  min?: Maybe<TimeSlotTimeLogsMinOrderBy>;
};

/** input type for inserting array relation for remote table "time_slot_time_logs" */
export type TimeSlotTimeLogsArrRelInsertInput = {
  data: Array<TimeSlotTimeLogsInsertInput>;
  on_conflict?: Maybe<TimeSlotTimeLogsOnConflict>;
};

/** Boolean expression to filter rows from the table "time_slot_time_logs". All fields are combined with a logical 'AND'. */
export type TimeSlotTimeLogsBoolExp = {
  _and?: Maybe<Array<Maybe<TimeSlotTimeLogsBoolExp>>>;
  _not?: Maybe<TimeSlotTimeLogsBoolExp>;
  _or?: Maybe<Array<Maybe<TimeSlotTimeLogsBoolExp>>>;
  timeLogId?: Maybe<UuidComparisonExp>;
  timeSlotId?: Maybe<UuidComparisonExp>;
  time_log?: Maybe<TimeLogBoolExp>;
  time_slot?: Maybe<TimeSlotBoolExp>;
};

/** unique or primary key constraints on table "time_slot_time_logs" */
export enum TimeSlotTimeLogsConstraint {
  /** unique or primary key constraint */
  Pk_84931d1a9078253918390719bd3 = "PK_84931d1a9078253918390719bd3"
}

/** input type for inserting data into table "time_slot_time_logs" */
export type TimeSlotTimeLogsInsertInput = {
  timeLogId?: Maybe<Scalars["uuid"]>;
  timeSlotId?: Maybe<Scalars["uuid"]>;
  time_log?: Maybe<TimeLogObjRelInsertInput>;
  time_slot?: Maybe<TimeSlotObjRelInsertInput>;
};

/** aggregate max on columns */
export type TimeSlotTimeLogsMaxFields = {
  __typename?: "time_slot_time_logs_max_fields";
  timeLogId?: Maybe<Scalars["uuid"]>;
  timeSlotId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "time_slot_time_logs" */
export type TimeSlotTimeLogsMaxOrderBy = {
  timeLogId?: Maybe<OrderBy>;
  timeSlotId?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type TimeSlotTimeLogsMinFields = {
  __typename?: "time_slot_time_logs_min_fields";
  timeLogId?: Maybe<Scalars["uuid"]>;
  timeSlotId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "time_slot_time_logs" */
export type TimeSlotTimeLogsMinOrderBy = {
  timeLogId?: Maybe<OrderBy>;
  timeSlotId?: Maybe<OrderBy>;
};

/** response of any mutation on the table "time_slot_time_logs" */
export type TimeSlotTimeLogsMutationResponse = {
  __typename?: "time_slot_time_logs_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<TimeSlotTimeLogs>;
};

/** input type for inserting object relation for remote table "time_slot_time_logs" */
export type TimeSlotTimeLogsObjRelInsertInput = {
  data: TimeSlotTimeLogsInsertInput;
  on_conflict?: Maybe<TimeSlotTimeLogsOnConflict>;
};

/** on conflict condition type for table "time_slot_time_logs" */
export type TimeSlotTimeLogsOnConflict = {
  constraint: TimeSlotTimeLogsConstraint;
  update_columns: Array<TimeSlotTimeLogsUpdateColumn>;
  where?: Maybe<TimeSlotTimeLogsBoolExp>;
};

/** ordering options when selecting data from "time_slot_time_logs" */
export type TimeSlotTimeLogsOrderBy = {
  timeLogId?: Maybe<OrderBy>;
  timeSlotId?: Maybe<OrderBy>;
  time_log?: Maybe<TimeLogOrderBy>;
  time_slot?: Maybe<TimeSlotOrderBy>;
};

/** primary key columns input for table: "time_slot_time_logs" */
export type TimeSlotTimeLogsPkColumnsInput = {
  timeLogId: Scalars["uuid"];
  timeSlotId: Scalars["uuid"];
};

/** select columns of table "time_slot_time_logs" */
export enum TimeSlotTimeLogsSelectColumn {
  /** column name */
  TimeLogId = "timeLogId",
  /** column name */
  TimeSlotId = "timeSlotId"
}

/** input type for updating data in table "time_slot_time_logs" */
export type TimeSlotTimeLogsSetInput = {
  timeLogId?: Maybe<Scalars["uuid"]>;
  timeSlotId?: Maybe<Scalars["uuid"]>;
};

/** update columns of table "time_slot_time_logs" */
export enum TimeSlotTimeLogsUpdateColumn {
  /** column name */
  TimeLogId = "timeLogId",
  /** column name */
  TimeSlotId = "timeSlotId"
}

/** update columns of table "time_slot" */
export enum TimeSlotUpdateColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Duration = "duration",
  /** column name */
  EmployeeId = "employeeId",
  /** column name */
  Id = "id",
  /** column name */
  Keyboard = "keyboard",
  /** column name */
  Mouse = "mouse",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  Overall = "overall",
  /** column name */
  StartedAt = "startedAt",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** aggregate var_pop on columns */
export type TimeSlotVarPopFields = {
  __typename?: "time_slot_var_pop_fields";
  duration?: Maybe<Scalars["Float"]>;
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
  overall?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "time_slot" */
export type TimeSlotVarPopOrderBy = {
  duration?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type TimeSlotVarSampFields = {
  __typename?: "time_slot_var_samp_fields";
  duration?: Maybe<Scalars["Float"]>;
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
  overall?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "time_slot" */
export type TimeSlotVarSampOrderBy = {
  duration?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type TimeSlotVarianceFields = {
  __typename?: "time_slot_variance_fields";
  duration?: Maybe<Scalars["Float"]>;
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
  overall?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "time_slot" */
export type TimeSlotVarianceOrderBy = {
  duration?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
};

/** columns and relationships of "timesheet" */
export type Timesheet = {
  __typename?: "timesheet";
  approvedAt?: Maybe<Scalars["timestamp"]>;
  approvedById?: Maybe<Scalars["uuid"]>;
  createdAt: Scalars["timestamp"];
  deletedAt?: Maybe<Scalars["timestamp"]>;
  duration: Scalars["Int"];
  /** An object relationship */
  employee?: Maybe<Employee>;
  /** An object relationship */
  employeeByEmployeeid: Employee;
  employeeId: Scalars["uuid"];
  id: Scalars["uuid"];
  isBilled: Scalars["Boolean"];
  keyboard: Scalars["Int"];
  lockedAt?: Maybe<Scalars["timestamp"]>;
  mouse: Scalars["Int"];
  organizationId?: Maybe<Scalars["uuid"]>;
  overall: Scalars["Int"];
  startedAt?: Maybe<Scalars["timestamp"]>;
  status: Scalars["String"];
  stoppedAt?: Maybe<Scalars["timestamp"]>;
  submittedAt?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  /** An array relationship */
  time_logs: Array<TimeLog>;
  /** An aggregated array relationship */
  time_logs_aggregate: TimeLogAggregate;
  updatedAt: Scalars["timestamp"];
};

/** columns and relationships of "timesheet" */
export type TimesheetTimeLogsArgs = {
  distinct_on?: Maybe<Array<TimeLogSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeLogOrderBy>>;
  where?: Maybe<TimeLogBoolExp>;
};

/** columns and relationships of "timesheet" */
export type TimesheetTimeLogsAggregateArgs = {
  distinct_on?: Maybe<Array<TimeLogSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TimeLogOrderBy>>;
  where?: Maybe<TimeLogBoolExp>;
};

/** aggregated selection of "timesheet" */
export type TimesheetAggregate = {
  __typename?: "timesheet_aggregate";
  aggregate?: Maybe<TimesheetAggregateFields>;
  nodes: Array<Timesheet>;
};

/** aggregate fields of "timesheet" */
export type TimesheetAggregateFields = {
  __typename?: "timesheet_aggregate_fields";
  avg?: Maybe<TimesheetAvgFields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<TimesheetMaxFields>;
  min?: Maybe<TimesheetMinFields>;
  stddev?: Maybe<TimesheetStddevFields>;
  stddev_pop?: Maybe<TimesheetStddevPopFields>;
  stddev_samp?: Maybe<TimesheetStddevSampFields>;
  sum?: Maybe<TimesheetSumFields>;
  var_pop?: Maybe<TimesheetVarPopFields>;
  var_samp?: Maybe<TimesheetVarSampFields>;
  variance?: Maybe<TimesheetVarianceFields>;
};

/** aggregate fields of "timesheet" */
export type TimesheetAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TimesheetSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "timesheet" */
export type TimesheetAggregateOrderBy = {
  avg?: Maybe<TimesheetAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<TimesheetMaxOrderBy>;
  min?: Maybe<TimesheetMinOrderBy>;
  stddev?: Maybe<TimesheetStddevOrderBy>;
  stddev_pop?: Maybe<TimesheetStddevPopOrderBy>;
  stddev_samp?: Maybe<TimesheetStddevSampOrderBy>;
  sum?: Maybe<TimesheetSumOrderBy>;
  var_pop?: Maybe<TimesheetVarPopOrderBy>;
  var_samp?: Maybe<TimesheetVarSampOrderBy>;
  variance?: Maybe<TimesheetVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "timesheet" */
export type TimesheetArrRelInsertInput = {
  data: Array<TimesheetInsertInput>;
  on_conflict?: Maybe<TimesheetOnConflict>;
};

/** aggregate avg on columns */
export type TimesheetAvgFields = {
  __typename?: "timesheet_avg_fields";
  duration?: Maybe<Scalars["Float"]>;
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
  overall?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "timesheet" */
export type TimesheetAvgOrderBy = {
  duration?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "timesheet". All fields are combined with a logical 'AND'. */
export type TimesheetBoolExp = {
  _and?: Maybe<Array<Maybe<TimesheetBoolExp>>>;
  _not?: Maybe<TimesheetBoolExp>;
  _or?: Maybe<Array<Maybe<TimesheetBoolExp>>>;
  approvedAt?: Maybe<TimestampComparisonExp>;
  approvedById?: Maybe<UuidComparisonExp>;
  createdAt?: Maybe<TimestampComparisonExp>;
  deletedAt?: Maybe<TimestampComparisonExp>;
  duration?: Maybe<IntComparisonExp>;
  employee?: Maybe<EmployeeBoolExp>;
  employeeByEmployeeid?: Maybe<EmployeeBoolExp>;
  employeeId?: Maybe<UuidComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  isBilled?: Maybe<BooleanComparisonExp>;
  keyboard?: Maybe<IntComparisonExp>;
  lockedAt?: Maybe<TimestampComparisonExp>;
  mouse?: Maybe<IntComparisonExp>;
  organizationId?: Maybe<UuidComparisonExp>;
  overall?: Maybe<IntComparisonExp>;
  startedAt?: Maybe<TimestampComparisonExp>;
  status?: Maybe<StringComparisonExp>;
  stoppedAt?: Maybe<TimestampComparisonExp>;
  submittedAt?: Maybe<TimestampComparisonExp>;
  tenantId?: Maybe<UuidComparisonExp>;
  time_logs?: Maybe<TimeLogBoolExp>;
  updatedAt?: Maybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "timesheet" */
export enum TimesheetConstraint {
  /** unique or primary key constraint */
  Pk_53c30fa094ae81f166955fb1036 = "PK_53c30fa094ae81f166955fb1036"
}

/** input type for incrementing integer column in table "timesheet" */
export type TimesheetIncInput = {
  duration?: Maybe<Scalars["Int"]>;
  keyboard?: Maybe<Scalars["Int"]>;
  mouse?: Maybe<Scalars["Int"]>;
  overall?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "timesheet" */
export type TimesheetInsertInput = {
  approvedAt?: Maybe<Scalars["timestamp"]>;
  approvedById?: Maybe<Scalars["uuid"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  deletedAt?: Maybe<Scalars["timestamp"]>;
  duration?: Maybe<Scalars["Int"]>;
  employee?: Maybe<EmployeeObjRelInsertInput>;
  employeeByEmployeeid?: Maybe<EmployeeObjRelInsertInput>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  isBilled?: Maybe<Scalars["Boolean"]>;
  keyboard?: Maybe<Scalars["Int"]>;
  lockedAt?: Maybe<Scalars["timestamp"]>;
  mouse?: Maybe<Scalars["Int"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  overall?: Maybe<Scalars["Int"]>;
  startedAt?: Maybe<Scalars["timestamp"]>;
  status?: Maybe<Scalars["String"]>;
  stoppedAt?: Maybe<Scalars["timestamp"]>;
  submittedAt?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  time_logs?: Maybe<TimeLogArrRelInsertInput>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate max on columns */
export type TimesheetMaxFields = {
  __typename?: "timesheet_max_fields";
  approvedAt?: Maybe<Scalars["timestamp"]>;
  approvedById?: Maybe<Scalars["uuid"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  deletedAt?: Maybe<Scalars["timestamp"]>;
  duration?: Maybe<Scalars["Int"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  keyboard?: Maybe<Scalars["Int"]>;
  lockedAt?: Maybe<Scalars["timestamp"]>;
  mouse?: Maybe<Scalars["Int"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  overall?: Maybe<Scalars["Int"]>;
  startedAt?: Maybe<Scalars["timestamp"]>;
  status?: Maybe<Scalars["String"]>;
  stoppedAt?: Maybe<Scalars["timestamp"]>;
  submittedAt?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by max() on columns of table "timesheet" */
export type TimesheetMaxOrderBy = {
  approvedAt?: Maybe<OrderBy>;
  approvedById?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  deletedAt?: Maybe<OrderBy>;
  duration?: Maybe<OrderBy>;
  employeeId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  lockedAt?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
  startedAt?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  stoppedAt?: Maybe<OrderBy>;
  submittedAt?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type TimesheetMinFields = {
  __typename?: "timesheet_min_fields";
  approvedAt?: Maybe<Scalars["timestamp"]>;
  approvedById?: Maybe<Scalars["uuid"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  deletedAt?: Maybe<Scalars["timestamp"]>;
  duration?: Maybe<Scalars["Int"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  keyboard?: Maybe<Scalars["Int"]>;
  lockedAt?: Maybe<Scalars["timestamp"]>;
  mouse?: Maybe<Scalars["Int"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  overall?: Maybe<Scalars["Int"]>;
  startedAt?: Maybe<Scalars["timestamp"]>;
  status?: Maybe<Scalars["String"]>;
  stoppedAt?: Maybe<Scalars["timestamp"]>;
  submittedAt?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** order by min() on columns of table "timesheet" */
export type TimesheetMinOrderBy = {
  approvedAt?: Maybe<OrderBy>;
  approvedById?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  deletedAt?: Maybe<OrderBy>;
  duration?: Maybe<OrderBy>;
  employeeId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  lockedAt?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
  startedAt?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  stoppedAt?: Maybe<OrderBy>;
  submittedAt?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** response of any mutation on the table "timesheet" */
export type TimesheetMutationResponse = {
  __typename?: "timesheet_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Timesheet>;
};

/** input type for inserting object relation for remote table "timesheet" */
export type TimesheetObjRelInsertInput = {
  data: TimesheetInsertInput;
  on_conflict?: Maybe<TimesheetOnConflict>;
};

/** on conflict condition type for table "timesheet" */
export type TimesheetOnConflict = {
  constraint: TimesheetConstraint;
  update_columns: Array<TimesheetUpdateColumn>;
  where?: Maybe<TimesheetBoolExp>;
};

/** ordering options when selecting data from "timesheet" */
export type TimesheetOrderBy = {
  approvedAt?: Maybe<OrderBy>;
  approvedById?: Maybe<OrderBy>;
  createdAt?: Maybe<OrderBy>;
  deletedAt?: Maybe<OrderBy>;
  duration?: Maybe<OrderBy>;
  employee?: Maybe<EmployeeOrderBy>;
  employeeByEmployeeid?: Maybe<EmployeeOrderBy>;
  employeeId?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  isBilled?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  lockedAt?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  organizationId?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
  startedAt?: Maybe<OrderBy>;
  status?: Maybe<OrderBy>;
  stoppedAt?: Maybe<OrderBy>;
  submittedAt?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  time_logs_aggregate?: Maybe<TimeLogAggregateOrderBy>;
  updatedAt?: Maybe<OrderBy>;
};

/** primary key columns input for table: "timesheet" */
export type TimesheetPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "timesheet" */
export enum TimesheetSelectColumn {
  /** column name */
  ApprovedAt = "approvedAt",
  /** column name */
  ApprovedById = "approvedById",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Duration = "duration",
  /** column name */
  EmployeeId = "employeeId",
  /** column name */
  Id = "id",
  /** column name */
  IsBilled = "isBilled",
  /** column name */
  Keyboard = "keyboard",
  /** column name */
  LockedAt = "lockedAt",
  /** column name */
  Mouse = "mouse",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  Overall = "overall",
  /** column name */
  StartedAt = "startedAt",
  /** column name */
  Status = "status",
  /** column name */
  StoppedAt = "stoppedAt",
  /** column name */
  SubmittedAt = "submittedAt",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** input type for updating data in table "timesheet" */
export type TimesheetSetInput = {
  approvedAt?: Maybe<Scalars["timestamp"]>;
  approvedById?: Maybe<Scalars["uuid"]>;
  createdAt?: Maybe<Scalars["timestamp"]>;
  deletedAt?: Maybe<Scalars["timestamp"]>;
  duration?: Maybe<Scalars["Int"]>;
  employeeId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  isBilled?: Maybe<Scalars["Boolean"]>;
  keyboard?: Maybe<Scalars["Int"]>;
  lockedAt?: Maybe<Scalars["timestamp"]>;
  mouse?: Maybe<Scalars["Int"]>;
  organizationId?: Maybe<Scalars["uuid"]>;
  overall?: Maybe<Scalars["Int"]>;
  startedAt?: Maybe<Scalars["timestamp"]>;
  status?: Maybe<Scalars["String"]>;
  stoppedAt?: Maybe<Scalars["timestamp"]>;
  submittedAt?: Maybe<Scalars["timestamp"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
};

/** aggregate stddev on columns */
export type TimesheetStddevFields = {
  __typename?: "timesheet_stddev_fields";
  duration?: Maybe<Scalars["Float"]>;
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
  overall?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "timesheet" */
export type TimesheetStddevOrderBy = {
  duration?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type TimesheetStddevPopFields = {
  __typename?: "timesheet_stddev_pop_fields";
  duration?: Maybe<Scalars["Float"]>;
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
  overall?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "timesheet" */
export type TimesheetStddevPopOrderBy = {
  duration?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type TimesheetStddevSampFields = {
  __typename?: "timesheet_stddev_samp_fields";
  duration?: Maybe<Scalars["Float"]>;
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
  overall?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "timesheet" */
export type TimesheetStddevSampOrderBy = {
  duration?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type TimesheetSumFields = {
  __typename?: "timesheet_sum_fields";
  duration?: Maybe<Scalars["Int"]>;
  keyboard?: Maybe<Scalars["Int"]>;
  mouse?: Maybe<Scalars["Int"]>;
  overall?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "timesheet" */
export type TimesheetSumOrderBy = {
  duration?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
};

/** update columns of table "timesheet" */
export enum TimesheetUpdateColumn {
  /** column name */
  ApprovedAt = "approvedAt",
  /** column name */
  ApprovedById = "approvedById",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DeletedAt = "deletedAt",
  /** column name */
  Duration = "duration",
  /** column name */
  EmployeeId = "employeeId",
  /** column name */
  Id = "id",
  /** column name */
  IsBilled = "isBilled",
  /** column name */
  Keyboard = "keyboard",
  /** column name */
  LockedAt = "lockedAt",
  /** column name */
  Mouse = "mouse",
  /** column name */
  OrganizationId = "organizationId",
  /** column name */
  Overall = "overall",
  /** column name */
  StartedAt = "startedAt",
  /** column name */
  Status = "status",
  /** column name */
  StoppedAt = "stoppedAt",
  /** column name */
  SubmittedAt = "submittedAt",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** aggregate var_pop on columns */
export type TimesheetVarPopFields = {
  __typename?: "timesheet_var_pop_fields";
  duration?: Maybe<Scalars["Float"]>;
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
  overall?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "timesheet" */
export type TimesheetVarPopOrderBy = {
  duration?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type TimesheetVarSampFields = {
  __typename?: "timesheet_var_samp_fields";
  duration?: Maybe<Scalars["Float"]>;
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
  overall?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "timesheet" */
export type TimesheetVarSampOrderBy = {
  duration?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type TimesheetVarianceFields = {
  __typename?: "timesheet_variance_fields";
  duration?: Maybe<Scalars["Float"]>;
  keyboard?: Maybe<Scalars["Float"]>;
  mouse?: Maybe<Scalars["Float"]>;
  overall?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "timesheet" */
export type TimesheetVarianceOrderBy = {
  duration?: Maybe<OrderBy>;
  keyboard?: Maybe<OrderBy>;
  mouse?: Maybe<OrderBy>;
  overall?: Maybe<OrderBy>;
};

/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
  _eq?: Maybe<Scalars["timestamp"]>;
  _gt?: Maybe<Scalars["timestamp"]>;
  _gte?: Maybe<Scalars["timestamp"]>;
  _in?: Maybe<Array<Scalars["timestamp"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamp"]>;
  _lte?: Maybe<Scalars["timestamp"]>;
  _neq?: Maybe<Scalars["timestamp"]>;
  _nin?: Maybe<Array<Scalars["timestamp"]>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: "user";
  createdAt: Scalars["timestamp"];
  email?: Maybe<Scalars["String"]>;
  /** An object relationship */
  employee?: Maybe<Employee>;
  firstName?: Maybe<Scalars["String"]>;
  hash?: Maybe<Scalars["String"]>;
  id: Scalars["uuid"];
  imageUrl?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  preferredComponentLayout?: Maybe<Scalars["String"]>;
  preferredLanguage?: Maybe<Scalars["String"]>;
  /** An object relationship */
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars["uuid"]>;
  /** An array relationship */
  tasks: Array<Task>;
  /** An aggregated array relationship */
  tasks_aggregate: TaskAggregate;
  tenantId?: Maybe<Scalars["uuid"]>;
  thirdPartyId?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["timestamp"];
  username?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "user" */
export type UserTasksArgs = {
  distinct_on?: Maybe<Array<TaskSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TaskOrderBy>>;
  where?: Maybe<TaskBoolExp>;
};

/** columns and relationships of "user" */
export type UserTasksAggregateArgs = {
  distinct_on?: Maybe<Array<TaskSelectColumn>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<TaskOrderBy>>;
  where?: Maybe<TaskBoolExp>;
};

/** aggregated selection of "user" */
export type UserAggregate = {
  __typename?: "user_aggregate";
  aggregate?: Maybe<UserAggregateFields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type UserAggregateFields = {
  __typename?: "user_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<UserMaxFields>;
  min?: Maybe<UserMinFields>;
};

/** aggregate fields of "user" */
export type UserAggregateFieldsCountArgs = {
  columns?: Maybe<Array<UserSelectColumn>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "user" */
export type UserAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<UserMaxOrderBy>;
  min?: Maybe<UserMinOrderBy>;
};

/** input type for inserting array relation for remote table "user" */
export type UserArrRelInsertInput = {
  data: Array<UserInsertInput>;
  on_conflict?: Maybe<UserOnConflict>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: Maybe<Array<Maybe<UserBoolExp>>>;
  _not?: Maybe<UserBoolExp>;
  _or?: Maybe<Array<Maybe<UserBoolExp>>>;
  createdAt?: Maybe<TimestampComparisonExp>;
  email?: Maybe<StringComparisonExp>;
  employee?: Maybe<EmployeeBoolExp>;
  firstName?: Maybe<StringComparisonExp>;
  hash?: Maybe<StringComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  imageUrl?: Maybe<StringComparisonExp>;
  lastName?: Maybe<StringComparisonExp>;
  preferredComponentLayout?: Maybe<StringComparisonExp>;
  preferredLanguage?: Maybe<StringComparisonExp>;
  role?: Maybe<RoleBoolExp>;
  roleId?: Maybe<UuidComparisonExp>;
  tasks?: Maybe<TaskBoolExp>;
  tenantId?: Maybe<UuidComparisonExp>;
  thirdPartyId?: Maybe<StringComparisonExp>;
  updatedAt?: Maybe<TimestampComparisonExp>;
  username?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint */
  Idx_78a916df40e02a9deb1c4b75ed = "IDX_78a916df40e02a9deb1c4b75ed",
  /** unique or primary key constraint */
  IdxE12875dfb3b1d92d7d7c5377e2 = "IDX_e12875dfb3b1d92d7d7c5377e2",
  /** unique or primary key constraint */
  PkCace4a159ff9f2512dd42373760 = "PK_cace4a159ff9f2512dd42373760"
}

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  email?: Maybe<Scalars["String"]>;
  employee?: Maybe<EmployeeObjRelInsertInput>;
  firstName?: Maybe<Scalars["String"]>;
  hash?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  imageUrl?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  preferredComponentLayout?: Maybe<Scalars["String"]>;
  preferredLanguage?: Maybe<Scalars["String"]>;
  role?: Maybe<RoleObjRelInsertInput>;
  roleId?: Maybe<Scalars["uuid"]>;
  tasks?: Maybe<TaskArrRelInsertInput>;
  tenantId?: Maybe<Scalars["uuid"]>;
  thirdPartyId?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
  username?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type UserMaxFields = {
  __typename?: "user_max_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  hash?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  imageUrl?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  preferredComponentLayout?: Maybe<Scalars["String"]>;
  preferredLanguage?: Maybe<Scalars["String"]>;
  roleId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  thirdPartyId?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
  username?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "user" */
export type UserMaxOrderBy = {
  createdAt?: Maybe<OrderBy>;
  email?: Maybe<OrderBy>;
  firstName?: Maybe<OrderBy>;
  hash?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  imageUrl?: Maybe<OrderBy>;
  lastName?: Maybe<OrderBy>;
  preferredComponentLayout?: Maybe<OrderBy>;
  preferredLanguage?: Maybe<OrderBy>;
  roleId?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  thirdPartyId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type UserMinFields = {
  __typename?: "user_min_fields";
  createdAt?: Maybe<Scalars["timestamp"]>;
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  hash?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  imageUrl?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  preferredComponentLayout?: Maybe<Scalars["String"]>;
  preferredLanguage?: Maybe<Scalars["String"]>;
  roleId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  thirdPartyId?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
  username?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "user" */
export type UserMinOrderBy = {
  createdAt?: Maybe<OrderBy>;
  email?: Maybe<OrderBy>;
  firstName?: Maybe<OrderBy>;
  hash?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  imageUrl?: Maybe<OrderBy>;
  lastName?: Maybe<OrderBy>;
  preferredComponentLayout?: Maybe<OrderBy>;
  preferredLanguage?: Maybe<OrderBy>;
  roleId?: Maybe<OrderBy>;
  tenantId?: Maybe<OrderBy>;
  thirdPartyId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
};

/** response of any mutation on the table "user" */
export type UserMutationResponse = {
  __typename?: "user_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type UserObjRelInsertInput = {
  data: UserInsertInput;
  on_conflict?: Maybe<UserOnConflict>;
};

/** on conflict condition type for table "user" */
export type UserOnConflict = {
  constraint: UserConstraint;
  update_columns: Array<UserUpdateColumn>;
  where?: Maybe<UserBoolExp>;
};

/** ordering options when selecting data from "user" */
export type UserOrderBy = {
  createdAt?: Maybe<OrderBy>;
  email?: Maybe<OrderBy>;
  employee?: Maybe<EmployeeOrderBy>;
  firstName?: Maybe<OrderBy>;
  hash?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  imageUrl?: Maybe<OrderBy>;
  lastName?: Maybe<OrderBy>;
  preferredComponentLayout?: Maybe<OrderBy>;
  preferredLanguage?: Maybe<OrderBy>;
  role?: Maybe<RoleOrderBy>;
  roleId?: Maybe<OrderBy>;
  tasks_aggregate?: Maybe<TaskAggregateOrderBy>;
  tenantId?: Maybe<OrderBy>;
  thirdPartyId?: Maybe<OrderBy>;
  updatedAt?: Maybe<OrderBy>;
  username?: Maybe<OrderBy>;
};

/** primary key columns input for table: "user" */
export type UserPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Email = "email",
  /** column name */
  FirstName = "firstName",
  /** column name */
  Hash = "hash",
  /** column name */
  Id = "id",
  /** column name */
  ImageUrl = "imageUrl",
  /** column name */
  LastName = "lastName",
  /** column name */
  PreferredComponentLayout = "preferredComponentLayout",
  /** column name */
  PreferredLanguage = "preferredLanguage",
  /** column name */
  RoleId = "roleId",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  ThirdPartyId = "thirdPartyId",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  Username = "username"
}

/** input type for updating data in table "user" */
export type UserSetInput = {
  createdAt?: Maybe<Scalars["timestamp"]>;
  email?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  hash?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["uuid"]>;
  imageUrl?: Maybe<Scalars["String"]>;
  lastName?: Maybe<Scalars["String"]>;
  preferredComponentLayout?: Maybe<Scalars["String"]>;
  preferredLanguage?: Maybe<Scalars["String"]>;
  roleId?: Maybe<Scalars["uuid"]>;
  tenantId?: Maybe<Scalars["uuid"]>;
  thirdPartyId?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["timestamp"]>;
  username?: Maybe<Scalars["String"]>;
};

/** update columns of table "user" */
export enum UserUpdateColumn {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Email = "email",
  /** column name */
  FirstName = "firstName",
  /** column name */
  Hash = "hash",
  /** column name */
  Id = "id",
  /** column name */
  ImageUrl = "imageUrl",
  /** column name */
  LastName = "lastName",
  /** column name */
  PreferredComponentLayout = "preferredComponentLayout",
  /** column name */
  PreferredLanguage = "preferredLanguage",
  /** column name */
  RoleId = "roleId",
  /** column name */
  TenantId = "tenantId",
  /** column name */
  ThirdPartyId = "thirdPartyId",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  Username = "username"
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: Maybe<Scalars["uuid"]>;
  _gt?: Maybe<Scalars["uuid"]>;
  _gte?: Maybe<Scalars["uuid"]>;
  _in?: Maybe<Array<Scalars["uuid"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["uuid"]>;
  _lte?: Maybe<Scalars["uuid"]>;
  _neq?: Maybe<Scalars["uuid"]>;
  _nin?: Maybe<Array<Scalars["uuid"]>>;
};
