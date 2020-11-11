CREATE TABLE public.activity (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "employeeId" uuid NOT NULL,
    "projectId" uuid,
    "timeSlotId" uuid,
    "taskId" uuid,
    title character varying NOT NULL,
    description character varying,
    "metaData" json,
    date date DEFAULT now() NOT NULL,
    "time" time without time zone DEFAULT now() NOT NULL,
    duration integer DEFAULT 0 NOT NULL,
    type character varying,
    source character varying DEFAULT 'BROWSER'::character varying NOT NULL,
    "deletedAt" timestamp without time zone
);
CREATE TABLE public.appointment_employee (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "appointmentId" character varying NOT NULL,
    "employeeId" character varying NOT NULL,
    "employeeAppointmentId" uuid
);
CREATE TABLE public.approval_policy (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    description character varying,
    "approvalType" character varying
);
CREATE TABLE public.availability_slot (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "employeeId" uuid,
    "startTime" timestamp without time zone NOT NULL,
    "endTime" timestamp without time zone NOT NULL,
    "allDay" boolean NOT NULL,
    type character varying NOT NULL
);
CREATE TABLE public.contact (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying,
    "firstName" character varying,
    "lastName" character varying,
    country character varying,
    city character varying,
    address character varying,
    address2 character varying,
    postcode integer,
    "regionCode" character varying,
    fax character varying,
    "fiscalInformation" character varying,
    website character varying
);
CREATE TABLE public.country (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "isoCode" character varying NOT NULL,
    country character varying NOT NULL
);
CREATE TABLE public.deal (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "createdByUserId" uuid NOT NULL,
    "stageId" uuid NOT NULL,
    "clientId" uuid,
    title character varying NOT NULL,
    probability integer NOT NULL
);
CREATE TABLE public.email_sent (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "emailTemplateId" uuid,
    name character varying NOT NULL,
    content character varying NOT NULL,
    email character varying NOT NULL,
    "userId" uuid
);
CREATE TABLE public.email_template (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    "languageCode" character varying NOT NULL,
    mjml character varying,
    hbs character varying NOT NULL
);
CREATE TABLE public.employee (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "userId" uuid NOT NULL,
    "valueDate" timestamp without time zone,
    "isActive" boolean DEFAULT true,
    short_description character varying(200),
    description character varying,
    "startedWorkOn" timestamp without time zone,
    "endWork" timestamp without time zone,
    "payPeriod" character varying,
    "billRateValue" numeric,
    "billRateCurrency" character varying,
    "reWeeklyLimit" integer,
    "offerDate" timestamp without time zone,
    "acceptDate" timestamp without time zone,
    "rejectDate" timestamp without time zone,
    "employeeLevel" character varying(500),
    "anonymousBonus" boolean,
    "averageIncome" numeric,
    "averageBonus" numeric,
    "totalWorkHours" numeric DEFAULT 0 NOT NULL,
    "averageExpenses" numeric,
    show_anonymous_bonus boolean,
    show_average_bonus boolean,
    show_average_expenses boolean,
    show_average_income boolean,
    show_billrate boolean,
    show_payperiod boolean,
    show_start_work_on boolean,
    "contactId" uuid,
    "organizationPositionId" uuid
);
CREATE TABLE public.employee_appointment (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "employeeId" uuid,
    agenda character varying NOT NULL,
    description character varying,
    location character varying,
    "startDateTime" timestamp without time zone NOT NULL,
    "endDateTime" timestamp without time zone NOT NULL,
    "bufferTimeStart" boolean,
    "bufferTimeEnd" boolean,
    "bufferTimeInMins" integer,
    "breakTimeInMins" integer,
    "breakStartTime" timestamp without time zone,
    emails character varying,
    status character varying
);
CREATE TABLE public.employee_award (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    year character varying NOT NULL,
    "employeeId" uuid NOT NULL
);
CREATE TABLE public.employee_job_preset (
    "jobPresetId" uuid NOT NULL,
    "employeeId" uuid NOT NULL
);
CREATE TABLE public.employee_recurring_expense (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "employeeId" uuid NOT NULL,
    "startDay" integer NOT NULL,
    "startMonth" integer NOT NULL,
    "startYear" integer NOT NULL,
    "startDate" timestamp without time zone NOT NULL,
    "endDay" integer,
    "endMonth" integer,
    "endYear" integer,
    "endDate" timestamp without time zone,
    "categoryName" character varying NOT NULL,
    value numeric NOT NULL,
    currency character varying NOT NULL,
    "parentRecurringExpenseId" character varying
);
CREATE TABLE public.employee_setting (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "employeeId" uuid NOT NULL,
    month integer NOT NULL,
    year integer NOT NULL,
    "settingType" character varying NOT NULL,
    value integer NOT NULL,
    currency character varying NOT NULL
);
CREATE TABLE public.employee_upwork_job_search_criterion (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "jobPresetId" uuid,
    "employeeId" uuid NOT NULL,
    "occupationId" uuid,
    "categoryId" uuid,
    keyword character varying,
    "jobType" text
);
CREATE TABLE public.equipment (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    type character varying NOT NULL,
    "serialNumber" character varying NOT NULL,
    "manufacturedYear" numeric,
    "initialCost" numeric,
    currency character varying NOT NULL,
    "maxSharePeriod" numeric,
    "autoApproveShare" boolean NOT NULL
);
CREATE TABLE public.equipment_shares_employees (
    "equipmentSharingId" uuid NOT NULL,
    "employeeId" uuid NOT NULL
);
CREATE TABLE public.equipment_shares_teams (
    "equipmentSharingId" uuid NOT NULL,
    "organizationTeamId" uuid NOT NULL
);
CREATE TABLE public.equipment_sharing (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying,
    "equipmentId" uuid,
    "shareRequestDay" timestamp without time zone,
    "shareStartDay" timestamp without time zone,
    "shareEndDay" timestamp without time zone,
    status integer NOT NULL,
    "createdBy" character varying,
    "createdByName" character varying,
    "equipmentSharingPolicyId" uuid
);
CREATE TABLE public.equipment_sharing_policy (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    description character varying
);
CREATE TABLE public.estimate_email (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    token character varying NOT NULL,
    email character varying NOT NULL,
    "expireDate" timestamp without time zone NOT NULL
);
CREATE TABLE public.event_type (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "employeeId" uuid,
    duration numeric NOT NULL,
    "durationUnit" character varying,
    title character varying,
    description character varying,
    "isActive" boolean
);
CREATE TABLE public.expense (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "employeeId" uuid,
    amount numeric NOT NULL,
    "typeOfExpense" character varying,
    "organizationContactId" character varying,
    "organizationContactName" character varying,
    "projectId" character varying,
    "projectName" character varying,
    notes character varying,
    currency character varying NOT NULL,
    "valueDate" timestamp without time zone,
    purpose character varying,
    "taxType" character varying,
    "taxLabel" character varying,
    "rateValue" numeric,
    receipt character varying,
    "splitExpense" boolean,
    reference character varying,
    status character varying,
    "vendorId" uuid NOT NULL,
    "categoryId" uuid NOT NULL
);
CREATE TABLE public.expense_category (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL
);
CREATE TABLE public.goal (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    description character varying NOT NULL,
    deadline character varying NOT NULL,
    level character varying NOT NULL,
    progress integer NOT NULL,
    "alignedKeyResultId" uuid,
    "ownerTeamId" uuid,
    "ownerEmployeeId" uuid,
    "leadId" uuid
);
CREATE TABLE public.goal_kpi (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    description character varying NOT NULL,
    type character varying NOT NULL,
    unit character varying,
    operator character varying NOT NULL,
    "currentValue" integer NOT NULL,
    "targetValue" integer NOT NULL,
    "leadId" uuid
);
CREATE TABLE public.income (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "employeeId" uuid,
    amount numeric NOT NULL,
    "clientId" character varying,
    "clientName" character varying NOT NULL,
    currency character varying NOT NULL,
    "valueDate" timestamp without time zone,
    notes character varying,
    "isBonus" boolean,
    reference character varying
);
CREATE TABLE public.integration (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL,
    "imgSrc" character varying,
    "isComingSoon" boolean DEFAULT false NOT NULL,
    "isPaid" boolean DEFAULT false NOT NULL,
    version character varying,
    "docUrl" character varying,
    "isFreeTrial" boolean DEFAULT false NOT NULL,
    "freeTrialPeriod" numeric DEFAULT 0 NOT NULL
);
CREATE TABLE public.integration_entity_setting (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    entity character varying NOT NULL,
    sync boolean NOT NULL,
    "integrationId" uuid
);
CREATE TABLE public.integration_entity_setting_tied_entity (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    entity character varying NOT NULL,
    sync boolean NOT NULL,
    "integrationEntitySettingId" uuid
);
CREATE TABLE public.integration_integration_type (
    "integrationId" uuid NOT NULL,
    "integrationTypeId" uuid NOT NULL
);
CREATE TABLE public.integration_map (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "integrationId" uuid NOT NULL,
    entity character varying NOT NULL,
    "sourceId" character varying NOT NULL,
    "gauzyId" character varying NOT NULL
);
CREATE TABLE public.integration_setting (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "settingsName" character varying NOT NULL,
    "settingsValue" character varying NOT NULL,
    "integrationId" uuid NOT NULL
);
CREATE TABLE public.integration_tenant (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL
);
CREATE TABLE public.integration_type (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL,
    "groupName" character varying NOT NULL,
    "order" integer NOT NULL
);
CREATE TABLE public.job_preset (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL
);
CREATE TABLE public.job_preset_upwork_job_search_criterion (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "jobPresetId" uuid NOT NULL,
    "occupationId" uuid,
    "categoryId" uuid,
    keyword character varying,
    "jobType" text
);
CREATE TABLE public.job_search_category (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    "jobSourceCategoryId" character varying,
    "jobSource" text DEFAULT 'Upwork'::text NOT NULL
);
CREATE TABLE public.job_search_occupation (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    "jobSourceOccupationId" character varying,
    "jobSource" text DEFAULT 'Upwork'::text NOT NULL
);
CREATE TABLE public.key_result (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    description character varying NOT NULL,
    type character varying NOT NULL,
    "targetValue" integer,
    "initialValue" integer,
    unit character varying,
    update integer NOT NULL,
    progress integer NOT NULL,
    "projectId" uuid,
    "taskId" uuid,
    "kpiId" uuid,
    deadline character varying NOT NULL,
    "hardDeadline" timestamp without time zone,
    "softDeadline" timestamp without time zone,
    status character varying NOT NULL,
    weight character varying,
    "goalId" uuid,
    "ownerId" uuid,
    "leadId" uuid
);
CREATE TABLE public.key_result_update (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    update integer NOT NULL,
    progress integer NOT NULL,
    owner character varying NOT NULL,
    status character varying NOT NULL,
    "keyResultId" uuid
);
CREATE TABLE public.knowledge_base (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    flag character varying NOT NULL,
    icon character varying NOT NULL,
    privacy character varying NOT NULL,
    language character varying NOT NULL,
    color character varying NOT NULL,
    description character varying,
    data character varying,
    index integer,
    "parentId" uuid,
    "articlesId" uuid
);
CREATE TABLE public.knowledge_base_article (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    description character varying NOT NULL,
    data character varying NOT NULL,
    "categoryId" character varying NOT NULL,
    draft boolean NOT NULL,
    privacy boolean NOT NULL,
    index integer NOT NULL
);
CREATE TABLE public.knowledge_base_author (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "employeeId" character varying NOT NULL,
    "articleId" character varying NOT NULL
);
CREATE TABLE public.language (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL,
    code character varying,
    is_system boolean DEFAULT true,
    description character varying NOT NULL,
    color character varying NOT NULL
);
CREATE TABLE public.organization (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "tenantId" uuid,
    name character varying NOT NULL,
    profile_link character varying,
    banner character varying,
    "totalEmployees" integer,
    short_description character varying,
    client_focus character varying,
    overview character varying,
    "imageUrl" character varying(500),
    currency character varying NOT NULL,
    "valueDate" timestamp without time zone,
    "defaultValueDateType" character varying NOT NULL,
    "isActive" boolean DEFAULT true NOT NULL,
    "defaultAlignmentType" character varying,
    "timeZone" character varying,
    "brandColor" character varying,
    "dateFormat" character varying,
    "officialName" character varying,
    "startWeekOn" character varying,
    "taxId" character varying,
    "numberFormat" character varying,
    "minimumProjectSize" character varying,
    "bonusType" character varying,
    "bonusPercentage" integer,
    "invitesAllowed" boolean,
    show_income boolean,
    show_profits boolean,
    show_bonuses_paid boolean,
    show_total_hours boolean,
    show_minimum_project_size boolean,
    show_projects_count boolean,
    show_clients_count boolean,
    show_clients boolean,
    show_employees_count boolean,
    "inviteExpiryPeriod" integer,
    "fiscalStartDate" timestamp without time zone,
    "fiscalEndDate" timestamp without time zone,
    "registrationDate" timestamp without time zone,
    "futureDateAllowed" boolean,
    "allowManualTime" boolean DEFAULT true NOT NULL,
    "allowModifyTime" boolean DEFAULT true NOT NULL,
    "allowDeleteTime" boolean DEFAULT true NOT NULL,
    "requireReason" boolean DEFAULT false NOT NULL,
    "requireDescription" boolean DEFAULT false NOT NULL,
    "requireProject" boolean DEFAULT false NOT NULL,
    "requireTask" boolean DEFAULT false NOT NULL,
    "requireClient" boolean DEFAULT false NOT NULL,
    "timeFormat" integer DEFAULT 12 NOT NULL,
    "separateInvoiceItemTaxAndDiscount" boolean,
    website character varying,
    "fiscalInformation" character varying,
    "currencyPosition" character varying DEFAULT 'LEFT'::character varying NOT NULL,
    "discountAfterTax" boolean,
    "contactId" uuid
);
CREATE TABLE public.organization_award (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    year character varying NOT NULL
);
CREATE TABLE public.organization_contact (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    "primaryEmail" character varying,
    "primaryPhone" character varying,
    "inviteStatus" character varying,
    notes character varying,
    "contactType" character varying NOT NULL,
    "imageUrl" character varying(500),
    "contactId" uuid
);
CREATE TABLE public.organization_contact_employee (
    "organizationContactId" uuid NOT NULL,
    "employeeId" uuid NOT NULL
);
CREATE TABLE public.organization_department (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL
);
CREATE TABLE public.organization_department_employee (
    "organizationDepartmentId" uuid NOT NULL,
    "employeeId" uuid NOT NULL
);
CREATE TABLE public.organization_document (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    "documentUrl" character varying NOT NULL
);
CREATE TABLE public.organization_employee_level (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    level character varying NOT NULL
);
CREATE TABLE public.organization_employment_type (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL
);
CREATE TABLE public.organization_employment_type_employee (
    "organizationEmploymentTypeId" uuid NOT NULL,
    "employeeId" uuid NOT NULL
);
CREATE TABLE public.organization_language (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    level character varying NOT NULL,
    "languageId" uuid NOT NULL
);
CREATE TABLE public.organization_position (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL
);
CREATE TABLE public.organization_project (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    "organizationContactId" uuid,
    "startDate" timestamp without time zone,
    "endDate" timestamp without time zone,
    billing character varying,
    currency character varying,
    public boolean,
    owner character varying,
    "taskListType" character varying DEFAULT 'GRID'::character varying NOT NULL,
    code character varying,
    description character varying,
    color character varying,
    billable boolean,
    "billingFlat" boolean
);
CREATE TABLE public.organization_project_employee (
    "organizationProjectId" uuid NOT NULL,
    "employeeId" uuid NOT NULL
);
CREATE TABLE public.organization_recurring_expense (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "startDay" integer NOT NULL,
    "startMonth" integer NOT NULL,
    "startYear" integer NOT NULL,
    "startDate" timestamp without time zone NOT NULL,
    "endDay" integer,
    "endMonth" integer,
    "endYear" integer,
    "endDate" timestamp without time zone,
    "categoryName" character varying NOT NULL,
    value numeric NOT NULL,
    currency character varying NOT NULL,
    "splitExpense" boolean,
    "parentRecurringExpenseId" character varying
);
CREATE TABLE public.organization_sprint (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    "projectId" uuid NOT NULL,
    goal character varying,
    length integer DEFAULT 7 NOT NULL,
    "startDate" timestamp without time zone,
    "endDate" timestamp without time zone,
    "dayStart" integer,
    "isActive" boolean
);
CREATE TABLE public.organization_team (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL
);
CREATE TABLE public.organization_team_employee (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "organizationTeamId" uuid NOT NULL,
    "employeeId" uuid NOT NULL,
    "roleId" uuid
);
CREATE TABLE public.organization_vendor (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    email character varying,
    phone character varying,
    website character varying
);
CREATE TABLE public.pipeline (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    description text,
    name character varying NOT NULL,
    "isActive" boolean NOT NULL
);
CREATE TABLE public.pipeline_stage (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "pipelineId" uuid NOT NULL,
    description text,
    index integer NOT NULL,
    name character varying NOT NULL
);
CREATE TABLE public.product (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    description character varying NOT NULL,
    enabled boolean DEFAULT true NOT NULL,
    code character varying NOT NULL,
    "imageUrl" character varying,
    language character varying,
    "typeId" uuid,
    "categoryId" uuid
);
CREATE TABLE public.product_category (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "imageUrl" character varying
);
CREATE TABLE public.product_category_translation (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    description character varying,
    "languageCode" character varying NOT NULL,
    "referenceId" uuid
);
CREATE TABLE public.product_option (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    code character varying NOT NULL,
    "productId" uuid
);
CREATE TABLE public.product_type (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    icon character varying
);
CREATE TABLE public.product_type_translation (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    description character varying,
    "languageCode" character varying NOT NULL,
    "referenceId" uuid
);
CREATE TABLE public.product_variant (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    taxes integer DEFAULT 0 NOT NULL,
    notes character varying,
    "productId" uuid,
    quantity integer DEFAULT 0 NOT NULL,
    "billingInvoicingPolicy" character varying DEFAULT 'Quantity ordered'::character varying NOT NULL,
    "internalReference" character varying,
    enabled boolean DEFAULT true NOT NULL,
    "settingsId" uuid,
    "priceId" uuid
);
CREATE TABLE public.product_variant_options_product_option (
    "productVariantId" uuid NOT NULL,
    "productOptionId" uuid NOT NULL
);
CREATE TABLE public.product_variant_price (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "unitCost" integer DEFAULT 0 NOT NULL,
    "unitCostCurrency" character varying DEFAULT 'USD'::character varying NOT NULL,
    "retailPrice" integer DEFAULT 0 NOT NULL,
    "retailPriceCurrency" character varying DEFAULT 'USD'::character varying NOT NULL
);
CREATE TABLE public.product_variant_setting (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "isSubscription" boolean DEFAULT false NOT NULL,
    "isPurchaseAutomatically" boolean DEFAULT false NOT NULL,
    "canBeSold" boolean DEFAULT true NOT NULL,
    "canBePurchased" boolean DEFAULT true NOT NULL,
    "canBeCharged" boolean DEFAULT false NOT NULL,
    "canBeRented" boolean DEFAULT false NOT NULL,
    "isEquipment" boolean DEFAULT false NOT NULL,
    "trackInventory" boolean DEFAULT false NOT NULL
);
CREATE TABLE public.proposal (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "employeeId" uuid,
    "jobPostUrl" character varying,
    "valueDate" timestamp without time zone,
    "jobPostContent" character varying NOT NULL,
    "proposalContent" character varying NOT NULL,
    status character varying NOT NULL
);
CREATE TABLE public.request_approval (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    "approvalPolicyId" uuid,
    status integer,
    "createdBy" character varying,
    min_count integer,
    "createdByName" character varying,
    "requestId" character varying,
    "requestType" character varying
);
CREATE TABLE public.request_approval_employee (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "requestApprovalId" uuid NOT NULL,
    "employeeId" uuid NOT NULL,
    status integer
);
CREATE TABLE public.request_approval_team (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "requestApprovalId" uuid NOT NULL,
    "teamId" uuid NOT NULL,
    status integer
);
CREATE TABLE public.role (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "tenantId" uuid,
    name character varying NOT NULL
);
CREATE TABLE public.role_permission (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "tenantId" uuid,
    "roleId" uuid NOT NULL,
    permission character varying NOT NULL,
    enabled boolean DEFAULT false
);
CREATE TABLE public.screenshot (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "timeSlotId" uuid,
    file character varying NOT NULL,
    thumb character varying,
    "recordedAt" timestamp without time zone,
    "deletedAt" timestamp without time zone
);
CREATE TABLE public.skill (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    description character varying NOT NULL,
    color character varying NOT NULL
);
CREATE TABLE public.skill_employee (
    "skillId" uuid NOT NULL,
    "employeeId" uuid NOT NULL
);
CREATE TABLE public.skill_organization (
    "organizationId" uuid NOT NULL,
    "skillId" uuid NOT NULL
);
CREATE TABLE public.tag (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    description character varying NOT NULL,
    color character varying NOT NULL,
    "isSystem" boolean DEFAULT false NOT NULL
);
CREATE TABLE public.tag_employee (
    "employeeId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.tag_equipment (
    "equipmentId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.tag_event_type (
    "eventTypeId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.tag_expense (
    "expenseId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.tag_income (
    "incomeId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.tag_integration (
    "integrationId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.tag_organization (
    "organizationId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.tag_organization_contact (
    "organizationContactId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.tag_organization_department (
    "organizationDepartmentId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.tag_organization_employee_level (
    "organizationEmployeeLevelId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.tag_organization_employment_type (
    "organizationEmploymentTypeId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.tag_organization_expense_category (
    "expenseCategoryId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.tag_organization_position (
    "organizationPositionId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.tag_organization_project (
    "organizationProjectId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.tag_organization_team (
    "organizationTeamId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.tag_organization_vendor (
    "organizationVendorId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.tag_product (
    "productId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.tag_proposal (
    "proposalId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.tag_request_approval (
    "requestApprovalId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.tag_task (
    "taskId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.tag_user (
    "userId" uuid NOT NULL,
    "tagId" uuid NOT NULL
);
CREATE TABLE public.task (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    title character varying NOT NULL,
    description character varying,
    status character varying NOT NULL,
    estimate integer,
    "dueDate" timestamp without time zone,
    "projectId" uuid,
    "creatorId" uuid NOT NULL,
    "organizationSprintId" uuid
);
CREATE TABLE public.task_employee (
    "taskId" uuid NOT NULL,
    "employeeId" uuid NOT NULL
);
CREATE TABLE public.task_team (
    "taskId" uuid NOT NULL,
    "organizationTeamId" uuid NOT NULL
);
CREATE TABLE public.tenant (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    name character varying NOT NULL
);
CREATE TABLE public.tenant_setting (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "tenantId" uuid,
    name character varying NOT NULL,
    value character varying
);
CREATE TABLE public.time_log (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "employeeId" uuid NOT NULL,
    "timesheetId" uuid,
    "projectId" uuid,
    "taskId" uuid,
    "organizationContactId" uuid,
    "startedAt" timestamp without time zone,
    "stoppedAt" timestamp without time zone,
    "logType" character varying DEFAULT 'TRACKED'::character varying NOT NULL,
    source character varying DEFAULT 'BROWSER'::character varying NOT NULL,
    description character varying,
    reason character varying,
    "isBillable" boolean DEFAULT false NOT NULL,
    "deletedAt" timestamp without time zone
);
CREATE TABLE public.time_off_policy (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    name character varying NOT NULL,
    "requiresApproval" boolean NOT NULL,
    paid boolean NOT NULL
);
CREATE TABLE public.time_off_policy_employee (
    "timeOffPolicyId" uuid NOT NULL,
    "employeeId" uuid NOT NULL
);
CREATE TABLE public.time_off_request (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "documentUrl" character varying NOT NULL,
    description character varying,
    start timestamp without time zone NOT NULL,
    "end" timestamp without time zone NOT NULL,
    "requestDate" timestamp without time zone NOT NULL,
    status character varying NOT NULL,
    "isHoliday" boolean NOT NULL,
    "policyId" uuid NOT NULL
);
CREATE TABLE public.time_off_request_employee (
    "timeOffRequestId" uuid NOT NULL,
    "employeeId" uuid NOT NULL
);
CREATE TABLE public.time_slot (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "employeeId" uuid NOT NULL,
    duration integer DEFAULT 0 NOT NULL,
    keyboard integer DEFAULT 0 NOT NULL,
    mouse integer DEFAULT 0 NOT NULL,
    overall integer DEFAULT 0 NOT NULL,
    "startedAt" timestamp without time zone NOT NULL
);
CREATE TABLE public.time_slot_minute (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "timeSlotId" uuid NOT NULL,
    keyboard integer DEFAULT 0 NOT NULL,
    mouse integer DEFAULT 0 NOT NULL,
    datetime timestamp without time zone NOT NULL
);
CREATE TABLE public.time_slot_time_logs (
    "timeLogId" uuid NOT NULL,
    "timeSlotId" uuid NOT NULL
);
CREATE TABLE public.timesheet (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "employeeId" uuid NOT NULL,
    "approvedById" uuid,
    duration integer DEFAULT 0 NOT NULL,
    keyboard integer DEFAULT 0 NOT NULL,
    mouse integer DEFAULT 0 NOT NULL,
    overall integer DEFAULT 0 NOT NULL,
    "startedAt" timestamp without time zone,
    "stoppedAt" timestamp without time zone,
    "approvedAt" timestamp without time zone,
    "submittedAt" timestamp without time zone,
    "lockedAt" timestamp without time zone,
    "isBilled" boolean DEFAULT false NOT NULL,
    status character varying DEFAULT 'PENDING'::character varying NOT NULL,
    "deletedAt" timestamp without time zone
);
CREATE TABLE public."user" (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "tenantId" uuid,
    "thirdPartyId" character varying,
    "firstName" character varying,
    "lastName" character varying,
    email character varying,
    username character varying,
    hash character varying,
    "imageUrl" character varying(500),
    "preferredLanguage" character varying,
    "preferredComponentLayout" character varying,
    "roleId" uuid
);
CREATE TABLE public.user_organization (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "organizationId" uuid,
    "tenantId" uuid,
    "userId" uuid NOT NULL,
    "isDefault" boolean DEFAULT true NOT NULL,
    "isActive" boolean DEFAULT true NOT NULL
);
ALTER TABLE ONLY public.time_slot
    ADD CONSTRAINT "PK_03f782f8c4af029253f6ad5bacf" PRIMARY KEY (id);
ALTER TABLE ONLY public.tag_organization_employee_level
    ADD CONSTRAINT "PK_0470eeb8bc64b959cee858971d1" PRIMARY KEY ("organizationEmployeeLevelId", "tagId");
ALTER TABLE ONLY public.integration_map
    ADD CONSTRAINT "PK_04fadd5eb551bbeba50aced5d0a" PRIMARY KEY (id);
ALTER TABLE ONLY public.tag_event_type
    ADD CONSTRAINT "PK_0505a044d09085a7bce5e705d0b" PRIMARY KEY ("eventTypeId", "tagId");
ALTER TABLE ONLY public.approval_policy
    ADD CONSTRAINT "PK_06da9549a940994965e137d4b8a" PRIMARY KEY (id);
ALTER TABLE ONLY public.equipment
    ADD CONSTRAINT "PK_0722e1b9d6eb19f5874c1678740" PRIMARY KEY (id);
ALTER TABLE ONLY public.integration_integration_type
    ADD CONSTRAINT "PK_07ee685488f4e771025e0292eb2" PRIMARY KEY ("integrationId", "integrationTypeId");
ALTER TABLE ONLY public.employee_appointment
    ADD CONSTRAINT "PK_0cffa7fe7917dce7981f126e8bc" PRIMARY KEY (id);
ALTER TABLE ONLY public.tag_equipment
    ADD CONSTRAINT "PK_0dbbcefe12308eeda2a9d4d6c78" PRIMARY KEY ("equipmentId", "tagId");
ALTER TABLE ONLY public.product_category
    ADD CONSTRAINT "PK_0dce9bc93c2d2c399982d04bef1" PRIMARY KEY (id);
ALTER TABLE ONLY public.estimate_email
    ADD CONSTRAINT "PK_0ea0366889e6ca5d151501328c6" PRIMARY KEY (id);
ALTER TABLE ONLY public.request_approval_employee
    ADD CONSTRAINT "PK_0f6e94eb31b0ae7e8d43523fa2e" PRIMARY KEY (id);
ALTER TABLE ONLY public.integration_tenant
    ADD CONSTRAINT "PK_14c591f8c0dde7197f664afbf8c" PRIMARY KEY (id);
ALTER TABLE ONLY public.organization_sprint
    ADD CONSTRAINT "PK_1711f05c8de98d9ccf00acbccd2" PRIMARY KEY (id);
ALTER TABLE ONLY public.knowledge_base
    ADD CONSTRAINT "PK_19d3f52f6da1501b7e235f1da5c" PRIMARY KEY (id);
ALTER TABLE ONLY public.product_variant
    ADD CONSTRAINT "PK_1ab69c9935c61f7c70791ae0a9f" PRIMARY KEY (id);
ALTER TABLE ONLY public.organization_contact
    ADD CONSTRAINT "PK_1b315ca37fec4b8bdbdf1b59d28" PRIMARY KEY (id);
ALTER TABLE ONLY public.pipeline_stage
    ADD CONSTRAINT "PK_1d98a4c60c2cf5e2bc816a3e54d" PRIMARY KEY (id);
ALTER TABLE ONLY public.equipment_sharing
    ADD CONSTRAINT "PK_1ef883fc78969d9825a15c37368" PRIMARY KEY (id);
ALTER TABLE ONLY public.activity
    ADD CONSTRAINT "PK_24625a1d6b1b089c8ae206fe467" PRIMARY KEY (id);
ALTER TABLE ONLY public.employee_award
    ADD CONSTRAINT "PK_285f4201fd5271b48ef8ab06c4c" PRIMARY KEY (id);
ALTER TABLE ONLY public.income
    ADD CONSTRAINT "PK_29a10f17b97568f70cee8586d58" PRIMARY KEY (id);
ALTER TABLE ONLY public.tag_organization_expense_category
    ADD CONSTRAINT "PK_2ab89f7775405681c3466663390" PRIMARY KEY ("expenseCategoryId", "tagId");
ALTER TABLE ONLY public.employee_upwork_job_search_criterion
    ADD CONSTRAINT "PK_2b2b3f3fdeacef0fb98cd31ed29" PRIMARY KEY (id);
ALTER TABLE ONLY public.contact
    ADD CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY (id);
ALTER TABLE ONLY public.request_approval
    ADD CONSTRAINT "PK_31e8193d208fec62c105223d8ac" PRIMARY KEY (id);
ALTER TABLE ONLY public.tag_product
    ADD CONSTRAINT "PK_34c67de1e9525aae8fd2b313df8" PRIMARY KEY ("productId", "tagId");
ALTER TABLE ONLY public.tag_organization_department
    ADD CONSTRAINT "PK_35c078336a1922ec389219b2c45" PRIMARY KEY ("organizationDepartmentId", "tagId");
ALTER TABLE ONLY public.job_search_occupation
    ADD CONSTRAINT "PK_37e51c412e7d220fac1aae7d626" PRIMARY KEY (id);
ALTER TABLE ONLY public.employee
    ADD CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY (id);
ALTER TABLE ONLY public.user_organization
    ADD CONSTRAINT "PK_3e103cdf85b7d6cb620b4db0f0c" PRIMARY KEY (id);
ALTER TABLE ONLY public.tag_integration
    ADD CONSTRAINT "PK_403dfc4a5211261f78f87bedb9b" PRIMARY KEY ("integrationId", "tagId");
ALTER TABLE ONLY public.product_category_translation
    ADD CONSTRAINT "PK_40ac21f239e150f3568da259974" PRIMARY KEY (id);
ALTER TABLE ONLY public.tag_organization_team
    ADD CONSTRAINT "PK_4602d7474789a3685fff8e2b783" PRIMARY KEY ("organizationTeamId", "tagId");
ALTER TABLE ONLY public.time_off_policy_employee
    ADD CONSTRAINT "PK_46cd285feb2ed714df9a260d810" PRIMARY KEY ("timeOffPolicyId", "employeeId");
ALTER TABLE ONLY public.tag_organization_employment_type
    ADD CONSTRAINT "PK_46f098c3f1370818a7924a7519b" PRIMARY KEY ("organizationEmploymentTypeId", "tagId");
ALTER TABLE ONLY public.organization
    ADD CONSTRAINT "PK_472c1f99a32def1b0abb219cd67" PRIMARY KEY (id);
ALTER TABLE ONLY public.expense_category
    ADD CONSTRAINT "PK_478b68a9314d8787fb3763a2298" PRIMARY KEY (id);
ALTER TABLE ONLY public.tag_organization_position
    ADD CONSTRAINT "PK_484993118e08f2007588ee3fc30" PRIMARY KEY ("organizationPositionId", "tagId");
ALTER TABLE ONLY public.tag_income
    ADD CONSTRAINT "PK_498400f0e51ae897bb0612318af" PRIMARY KEY ("incomeId", "tagId");
ALTER TABLE ONLY public.request_approval_team
    ADD CONSTRAINT "PK_4b4b7aaa7147834fede372801e3" PRIMARY KEY (id);
ALTER TABLE ONLY public.tag_expense
    ADD CONSTRAINT "PK_4bba149e75e4b60261ae562930f" PRIMARY KEY ("expenseId", "tagId");
ALTER TABLE ONLY public.product_option
    ADD CONSTRAINT "PK_4cf3c467e9bc764bdd32c4cd938" PRIMARY KEY (id);
ALTER TABLE ONLY public.task_team
    ADD CONSTRAINT "PK_50695a0740cb895e0e8429b4739" PRIMARY KEY ("taskId", "organizationTeamId");
ALTER TABLE ONLY public.organization_employment_type
    ADD CONSTRAINT "PK_536ca16fa8ff67c78030f1a102f" PRIMARY KEY (id);
ALTER TABLE ONLY public.job_preset_upwork_job_search_criterion
    ADD CONSTRAINT "PK_5384590c2acd8512b04245eda42" PRIMARY KEY (id);
ALTER TABLE ONLY public.timesheet
    ADD CONSTRAINT "PK_53c30fa094ae81f166955fb1036" PRIMARY KEY (id);
ALTER TABLE ONLY public.email_sent
    ADD CONSTRAINT "PK_54f534a4ca70e28c8236514045c" PRIMARY KEY (id);
ALTER TABLE ONLY public.organization_vendor
    ADD CONSTRAINT "PK_5573f4c64e453e02d1354552b5c" PRIMARY KEY (id);
ALTER TABLE ONLY public.organization_project_employee
    ADD CONSTRAINT "PK_5be2464327d74ba4e2b2240aac4" PRIMARY KEY ("organizationProjectId", "employeeId");
ALTER TABLE ONLY public.tenant_setting
    ADD CONSTRAINT "PK_5be851ba95ad60d3697c0fdf1ef" PRIMARY KEY (id);
ALTER TABLE ONLY public.task_employee
    ADD CONSTRAINT "PK_60bd79a9fccf99615511cfa85fb" PRIMARY KEY ("taskId", "employeeId");
ALTER TABLE ONLY public.time_slot_minute
    ADD CONSTRAINT "PK_620fe1f2b27a920a28c5b8398c2" PRIMARY KEY (id);
ALTER TABLE ONLY public.availability_slot
    ADD CONSTRAINT "PK_62a782c29fd83da5ba7c4ea55f7" PRIMARY KEY (id);
ALTER TABLE ONLY public.integration_entity_setting_tied_entity
    ADD CONSTRAINT "PK_66d66fe15f370d44379dfe1e114" PRIMARY KEY (id);
ALTER TABLE ONLY public.product_variant_setting
    ADD CONSTRAINT "PK_68ee4279dae4e21ca296f0c11d0" PRIMARY KEY (id);
ALTER TABLE ONLY public.equipment_shares_teams
    ADD CONSTRAINT "PK_69cfe66207da6b86d66e9030de9" PRIMARY KEY ("equipmentSharingId", "organizationTeamId");
ALTER TABLE ONLY public.organization_department
    ADD CONSTRAINT "PK_6bc7ba541f5d542483eea88d4f8" PRIMARY KEY (id);
ALTER TABLE ONLY public.tag_organization_project
    ADD CONSTRAINT "PK_6c30c1ae22624d30378dc45bfdf" PRIMARY KEY ("organizationProjectId", "tagId");
ALTER TABLE ONLY public.organization_employee_level
    ADD CONSTRAINT "PK_6ea827fb751cf6b1a212e309bcc" PRIMARY KEY (id);
ALTER TABLE ONLY public.integration_entity_setting
    ADD CONSTRAINT "PK_6f942ec2f8005d0def9bf156fbb" PRIMARY KEY (id);
ALTER TABLE ONLY public.organization_language
    ADD CONSTRAINT "PK_71bde6f6a7875239ffbeff339b7" PRIMARY KEY (id);
ALTER TABLE ONLY public.time_off_request_employee
    ADD CONSTRAINT "PK_780109136f243911fd9da8a807e" PRIMARY KEY ("timeOffRequestId", "employeeId");
ALTER TABLE ONLY public.organization_contact_employee
    ADD CONSTRAINT "PK_79df0e2f3e32dcea7eac509c08f" PRIMARY KEY ("organizationContactId", "employeeId");
ALTER TABLE ONLY public.tag_organization_vendor
    ADD CONSTRAINT "PK_80f9db94598383855c44ed8db34" PRIMARY KEY ("organizationVendorId", "tagId");
ALTER TABLE ONLY public.organization_project
    ADD CONSTRAINT "PK_81bf90b67fca82af6657f0bfd91" PRIMARY KEY (id);
ALTER TABLE ONLY public.time_slot_time_logs
    ADD CONSTRAINT "PK_84931d1a9078253918390719bd3" PRIMARY KEY ("timeLogId", "timeSlotId");
ALTER TABLE ONLY public.organization_award
    ADD CONSTRAINT "PK_85fa7182b9cf348b6ad11af9505" PRIMARY KEY (id);
ALTER TABLE ONLY public.job_search_category
    ADD CONSTRAINT "PK_884dcc4f15bc5b095b725eba477" PRIMARY KEY (id);
ALTER TABLE ONLY public.goal
    ADD CONSTRAINT "PK_88c8e2b461b711336c836b1e130" PRIMARY KEY (id);
ALTER TABLE ONLY public.organization_document
    ADD CONSTRAINT "PK_89fbc3c423bb134c8dd015958e1" PRIMARY KEY (id);
ALTER TABLE ONLY public.tag_user
    ADD CONSTRAINT "PK_8d89574b11150c846973a4704a3" PRIMARY KEY ("userId", "tagId");
ALTER TABLE ONLY public.tag
    ADD CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY (id);
ALTER TABLE ONLY public.key_result
    ADD CONSTRAINT "PK_9064c5abe9ba68432934564d43f" PRIMARY KEY (id);
ALTER TABLE ONLY public.role_permission
    ADD CONSTRAINT "PK_96c8f1fd25538d3692024115b47" PRIMARY KEY (id);
ALTER TABLE ONLY public.tag_organization_contact
    ADD CONSTRAINT "PK_9c446f8b403074bfd90d06bcf49" PRIMARY KEY ("organizationContactId", "tagId");
ALTER TABLE ONLY public.deal
    ADD CONSTRAINT "PK_9ce1c24acace60f6d7dc7a7189e" PRIMARY KEY (id);
ALTER TABLE ONLY public.skill
    ADD CONSTRAINT "PK_a0d33334424e64fb78dc3ce7196" PRIMARY KEY (id);
ALTER TABLE ONLY public.organization_department_employee
    ADD CONSTRAINT "PK_a31d2a838b7b0fce2b6213071e5" PRIMARY KEY ("organizationDepartmentId", "employeeId");
ALTER TABLE ONLY public.goal_kpi
    ADD CONSTRAINT "PK_a3ffb211e0d8cddaabc9b7500e1" PRIMARY KEY (id);
ALTER TABLE ONLY public.integration_setting
    ADD CONSTRAINT "PK_a9da6fb6dd2b4fdcdb994679023" PRIMARY KEY (id);
ALTER TABLE ONLY public.product_type_translation
    ADD CONSTRAINT "PK_add5418ce92da4d30bff0a89af7" PRIMARY KEY (id);
ALTER TABLE ONLY public.organization_position
    ADD CONSTRAINT "PK_b2340755b17ab4cde329463700b" PRIMARY KEY (id);
ALTER TABLE ONLY public.role
    ADD CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY (id);
ALTER TABLE ONLY public.time_log
    ADD CONSTRAINT "PK_b74817f73944f78f239601069f2" PRIMARY KEY (id);
ALTER TABLE ONLY public.equipment_shares_employees
    ADD CONSTRAINT "PK_b80a312b221e11ac394c39889fa" PRIMARY KEY ("equipmentSharingId", "employeeId");
ALTER TABLE ONLY public.screenshot
    ADD CONSTRAINT "PK_ba03e6a8a41f430189837f84fd9" PRIMARY KEY (id);
ALTER TABLE ONLY public.product_variant_price
    ADD CONSTRAINT "PK_ba659ff2940702124e799c5c854" PRIMARY KEY (id);
ALTER TABLE ONLY public.tag_organization
    ADD CONSTRAINT "PK_bb8848fda18a21b73ab43e9988c" PRIMARY KEY ("organizationId", "tagId");
ALTER TABLE ONLY public.product
    ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY (id);
ALTER TABLE ONLY public.country
    ADD CONSTRAINT "PK_bf6e37c231c4f4ea56dcd887269" PRIMARY KEY (id);
ALTER TABLE ONLY public.skill_organization
    ADD CONSTRAINT "PK_c0cf3d3890c81e0919d7d1fd0f0" PRIMARY KEY ("organizationId", "skillId");
ALTER TABLE ONLY public.tag_proposal
    ADD CONSTRAINT "PK_c1bbcee9e95d51c04260dc7f2bf" PRIMARY KEY ("proposalId", "tagId");
ALTER TABLE ONLY public.product_variant_options_product_option
    ADD CONSTRAINT "PK_c57de5cb6bb74504180604a00c0" PRIMARY KEY ("productVariantId", "productOptionId");
ALTER TABLE ONLY public.knowledge_base_article
    ADD CONSTRAINT "PK_c5b373d858b6e8866dec56ae313" PRIMARY KEY (id);
ALTER TABLE ONLY public.integration_type
    ADD CONSTRAINT "PK_c6fa17545c4c2e72e312e3c933d" PRIMARY KEY (id);
ALTER TABLE ONLY public.equipment_sharing_policy
    ADD CONSTRAINT "PK_c86c27cfd73768508bff426a0a5" PRIMARY KEY (id);
ALTER TABLE ONLY public.email_template
    ADD CONSTRAINT "PK_c90815fd4ca9119f19462207710" PRIMARY KEY (id);
ALTER TABLE ONLY public.proposal
    ADD CONSTRAINT "PK_ca872ecfe4fef5720d2d39e4275" PRIMARY KEY (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);
ALTER TABLE ONLY public.appointment_employee
    ADD CONSTRAINT "PK_cad339a11ed0408e417671162fb" PRIMARY KEY (id);
ALTER TABLE ONLY public.language
    ADD CONSTRAINT "PK_cc0a99e710eb3733f6fb42b1d4c" PRIMARY KEY (id);
ALTER TABLE ONLY public.skill_employee
    ADD CONSTRAINT "PK_cc3612fe6c013c5fff237aba454" PRIMARY KEY ("skillId", "employeeId");
ALTER TABLE ONLY public.time_off_request
    ADD CONSTRAINT "PK_cd772fb7872c550c988fd42c93d" PRIMARY KEY (id);
ALTER TABLE ONLY public.organization_employment_type_employee
    ADD CONSTRAINT "PK_cf7c1f2fbfb4fccaa5564b5edc3" PRIMARY KEY ("organizationEmploymentTypeId", "employeeId");
ALTER TABLE ONLY public.employee_recurring_expense
    ADD CONSTRAINT "PK_cff5ea80db428a5ead37a04f2f8" PRIMARY KEY (id);
ALTER TABLE ONLY public.tag_task
    ADD CONSTRAINT "PK_d1663765eb64fa7e28b7a4002ca" PRIMARY KEY ("taskId", "tagId");
ALTER TABLE ONLY public.key_result_update
    ADD CONSTRAINT "PK_d1d24d6a1d1069e293fe24f50d6" PRIMARY KEY (id);
ALTER TABLE ONLY public.organization_team_employee
    ADD CONSTRAINT "PK_d67cf2683dff6b64a436a354b57" PRIMARY KEY (id);
ALTER TABLE ONLY public.event_type
    ADD CONSTRAINT "PK_d968f34984d7d85d96f782872fe" PRIMARY KEY (id);
ALTER TABLE ONLY public.employee_setting
    ADD CONSTRAINT "PK_d98eee0375560c6dda8c6e8be72" PRIMARY KEY (id);
ALTER TABLE ONLY public.tenant
    ADD CONSTRAINT "PK_da8c6efd67bb301e810e56ac139" PRIMARY KEY (id);
ALTER TABLE ONLY public.organization_recurring_expense
    ADD CONSTRAINT "PK_dcb949b0c34d2a0297ce8bcea73" PRIMARY KEY (id);
ALTER TABLE ONLY public.job_preset
    ADD CONSTRAINT "PK_dd4f738d442d8e3b681eb884baa" PRIMARY KEY (id);
ALTER TABLE ONLY public.pipeline
    ADD CONSTRAINT "PK_df8aedd50509192d995535d68cd" PRIMARY KEY (id);
ALTER TABLE ONLY public.tag_request_approval
    ADD CONSTRAINT "PK_df8dcc1900379a096ca03dc19f1" PRIMARY KEY ("requestApprovalId", "tagId");
ALTER TABLE ONLY public.product_type
    ADD CONSTRAINT "PK_e0843930fbb8854fe36ca39dae1" PRIMARY KEY (id);
ALTER TABLE ONLY public.employee_job_preset
    ADD CONSTRAINT "PK_e31c77d3cf1eb3b90adb2800208" PRIMARY KEY ("jobPresetId", "employeeId");
ALTER TABLE ONLY public.organization_team
    ADD CONSTRAINT "PK_edd4226d4171cbe90fd0ee16a2a" PRIMARY KEY (id);
ALTER TABLE ONLY public.expense
    ADD CONSTRAINT "PK_edd925b450e13ea36197c9590fc" PRIMARY KEY (id);
ALTER TABLE ONLY public.knowledge_base_author
    ADD CONSTRAINT "PK_edf0d4be3efe6361a73cf958503" PRIMARY KEY (id);
ALTER TABLE ONLY public.tag_employee
    ADD CONSTRAINT "PK_f02244ef2ccbcc5498a8259b3dc" PRIMARY KEY ("employeeId", "tagId");
ALTER TABLE ONLY public.integration
    ADD CONSTRAINT "PK_f348d4694945d9dc4c7049a178a" PRIMARY KEY (id);
ALTER TABLE ONLY public.task
    ADD CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY (id);
ALTER TABLE ONLY public.time_off_policy
    ADD CONSTRAINT "PK_fce6b0e46ad8e48cd9ef25f2d36" PRIMARY KEY (id);
ALTER TABLE ONLY public.deal
    ADD CONSTRAINT "REL_1ae3abc0ae1dcf6c13f49b62b5" UNIQUE ("clientId");
ALTER TABLE ONLY public.product_variant
    ADD CONSTRAINT "REL_41b31a71dda350cfe5da07e0e4" UNIQUE ("priceId");
ALTER TABLE ONLY public.product_variant
    ADD CONSTRAINT "REL_eed35a0675d80fcbfaf329f527" UNIQUE ("settingsId");
ALTER TABLE ONLY public.employee
    ADD CONSTRAINT "REL_f4b0d329c4a3cf79ffe9d56504" UNIQUE ("userId");
ALTER TABLE ONLY public.time_slot_minute
    ADD CONSTRAINT "UQ_0ac1d2777eefcee82db52ca3660" UNIQUE ("timeSlotId", datetime);
ALTER TABLE ONLY public.skill
    ADD CONSTRAINT "UQ_0f49a593960360f6f85b692aca8" UNIQUE (name);
ALTER TABLE ONLY public.language
    ADD CONSTRAINT "UQ_7df7d1e250ea2a416f078a631fb" UNIQUE (name);
CREATE INDEX "IDX_0006d3025b6c92fbd4089b9465" ON public.expense USING btree ("taxLabel");
CREATE INDEX "IDX_00e2fd30761a36911648166044" ON public.tag_income USING btree ("tagId");
CREATE INDEX "IDX_0360b8197c2a38d6fe882cb1af" ON public.tag_equipment USING btree ("tagId");
CREATE INDEX "IDX_047b8b5c0782d5a6d4c8bfc1a4" ON public.expense USING btree ("organizationContactId");
CREATE INDEX "IDX_04c9e514ed70897f6ad8cadc3c" ON public.equipment_sharing_policy USING btree (name);
CREATE INDEX "IDX_04d16bdd72668de12c3e41a85a" ON public.pipeline_stage USING btree ("organizationId");
CREATE INDEX "IDX_06a9902fedc1f9dcdbaf14afb0" ON public.knowledge_base_article USING btree ("tenantId");
CREATE INDEX "IDX_08293ca31a601d3cd0228120bc" ON public.product USING btree ("tenantId");
CREATE INDEX "IDX_094af399a26d4a1d3ae17ea11e" ON public.tag_event_type USING btree ("eventTypeId");
CREATE INDEX "IDX_0951aacffe3f8d0cff54cf2f34" ON public.screenshot USING btree ("organizationId");
CREATE INDEX "IDX_0a0cf25cd8232a154d1cce2641" ON public.product_category USING btree ("tenantId");
CREATE INDEX "IDX_0a8cf0aacf95ce66e73e75a95c" ON public.time_off_request_employee USING btree ("timeOffRequestId");
CREATE INDEX "IDX_0ac8526c48a3daa267c86225fb" ON public.employee_recurring_expense USING btree ("employeeId");
CREATE INDEX "IDX_0af511c44de7a16beb45cc3785" ON public.email_sent USING btree ("tenantId");
CREATE INDEX "IDX_0b19a287858af40661bd3eb741" ON public.organization_recurring_expense USING btree ("tenantId");
CREATE INDEX "IDX_0cfba32db58a952f58b1e35cf1" ON public.product_variant_price USING btree ("organizationId");
CREATE INDEX "IDX_0d4f83695591ae3c98a0544ac8" ON public.organization_department_employee USING btree ("employeeId");
CREATE INDEX "IDX_0eb285a6b1ac7e3d0a542e50a4" ON public.tag_organization_department USING btree ("tagId");
CREATE INDEX "IDX_0ef34c9f9d6dc8d14f1fbb10e8" ON public.task_team USING btree ("organizationTeamId");
CREATE INDEX "IDX_0f19ad9872190b7a67a9652d5e" ON public.tag_integration USING btree ("tagId");
CREATE INDEX "IDX_0f823750ac5a7d899cc5d8d040" ON public.time_off_policy_employee USING btree ("timeOffPolicyId");
CREATE INDEX "IDX_103ae3eb65f4b091efc55cb532" ON public.organization_team USING btree (name);
CREATE INDEX "IDX_1057ec001a4c6b258658143047" ON public.organization_document USING btree ("organizationId");
CREATE INDEX "IDX_107a93f89c8f31f4386ae4b19d" ON public.tag_organization_expense_category USING btree ("expenseCategoryId");
CREATE INDEX "IDX_1462391059ebe137645098d727" ON public.approval_policy USING btree ("tenantId");
CREATE INDEX "IDX_15458cef74076623c270500053" ON public.organization USING btree (currency);
CREATE INDEX "IDX_1551e821871d9230cc0dafbbe5" ON public.knowledge_base_author USING btree ("tenantId");
CREATE INDEX "IDX_1751a572e91385a09d41c62471" ON public.role USING btree ("tenantId");
CREATE INDEX "IDX_176f5ed3c4534f3110d423d569" ON public.organization_team USING btree ("tenantId");
CREATE INDEX "IDX_18be859b371e9159dfc2cecbe1" ON public.tag_organization_project USING btree ("tagId");
CREATE INDEX "IDX_19de43e9f1842360ce646253d7" ON public."user" USING btree ("thirdPartyId");
CREATE INDEX "IDX_1a62a99e1016e4a2b461e886ec" ON public.job_search_occupation USING btree ("organizationId");
CREATE INDEX "IDX_1a7c40ae60806bb17cedb89e66" ON public.expense USING btree ("projectName");
CREATE INDEX "IDX_1c0ed84d54f8fbe4af10dfcda1" ON public.time_off_policy USING btree ("tenantId");
CREATE INDEX "IDX_1f7e0230bc542d703781020378" ON public.tag_organization_position USING btree ("organizationPositionId");
CREATE INDEX "IDX_1f97ff07fb198bd0a7786b2abd" ON public.user_organization USING btree ("isDefault");
CREATE INDEX "IDX_1fb664a63f20bea6a3f0b38771" ON public.tag_organization_contact USING btree ("organizationContactId");
CREATE INDEX "IDX_20207d9f915066dfbc2210bcf1" ON public.income USING btree (notes);
CREATE INDEX "IDX_225e476592214e32e117a85213" ON public.organization_language USING btree ("tenantId");
CREATE INDEX "IDX_227b5bd9867287cbbeece8f6ba" ON public.organization_employment_type USING btree ("tenantId");
CREATE INDEX "IDX_2323220b4decfd2f4d8307fd78" ON public.job_preset_upwork_job_search_criterion USING btree ("tenantId");
CREATE INDEX "IDX_233c1d351d63441aeb039d1164" ON public.estimate_email USING btree ("organizationId");
CREATE INDEX "IDX_235004f3dafac90692cd64d915" ON public.screenshot USING btree ("tenantId");
CREATE INDEX "IDX_2360aa7a4b5ab99e026584f305" ON public.organization USING btree ("defaultValueDateType");
CREATE INDEX "IDX_2382356b63c832a137079210bd" ON public.tag_organization_team USING btree ("tagId");
CREATE INDEX "IDX_23e9cfcf1bfff07dcc3254378d" ON public.integration_entity_setting USING btree ("tenantId");
CREATE INDEX "IDX_24e37d03ef224f1a16a35069c2" ON public.integration_tenant USING btree ("tenantId");
CREATE INDEX "IDX_25b8df69c9b7f5752c6a6a6ef7" ON public.timesheet USING btree ("tenantId");
CREATE INDEX "IDX_274708db64fcce5448f2c4541c" ON public.email_template USING btree (name);
CREATE INDEX "IDX_27d71aa2e843f07fbf36329be3" ON public.product_category_translation USING btree ("tenantId");
CREATE INDEX "IDX_28965bf63ad4c0976892d0fd5e" ON public.pipeline_stage USING btree ("tenantId");
CREATE INDEX "IDX_29c3c8cc3ea9db22e4a347f4b5" ON public.user_organization USING btree ("userId");
CREATE INDEX "IDX_29fbd3a17710a27e6f856072c0" ON public.income USING btree ("clientId");
CREATE INDEX "IDX_2ba72a9dec732a10e8c05bcdec" ON public.knowledge_base USING btree ("organizationId");
CREATE INDEX "IDX_2ba868f42c2301075b7c141359" ON public.organization_project_employee USING btree ("organizationProjectId");
CREATE INDEX "IDX_2c0494466d5a7e1165cea3dca9" ON public.appointment_employee USING btree ("tenantId");
CREATE INDEX "IDX_2dd271bdeb602b8c3956287e33" ON public.product_type_translation USING btree ("organizationId");
CREATE INDEX "IDX_2e0d21aab892b5993abaac09bc" ON public.organization_award USING btree ("organizationId");
CREATE INDEX "IDX_2efe48435d4ba480a4bb8b96fa" ON public.product_variant_setting USING btree ("tenantId");
CREATE INDEX "IDX_2fc2675c79cb3cbceb32bf2dc7" ON public.time_slot_time_logs USING btree ("timeLogId");
CREATE INDEX "IDX_30aafca59cdb456bf5231f9e46" ON public.product_type_translation USING btree ("tenantId");
CREATE INDEX "IDX_31626e7d39eb95b710d5a2d80f" ON public.organization_award USING btree (name);
CREATE INDEX "IDX_32a4bdd261ec81f4ca6b3abe26" ON public.product USING btree ("organizationId");
CREATE INDEX "IDX_33ab224e7755a46fff5bc1e64e" ON public.integration_tenant USING btree ("organizationId");
CREATE INDEX "IDX_34b8f471aac00eaec6f2830e5b" ON public.tag_event_type USING btree ("tagId");
CREATE INDEX "IDX_34c86921ee9b462bc5c7b61fad" ON public.integration_integration_type USING btree ("integrationId");
CREATE INDEX "IDX_3547f82f867489542ceae58a49" ON public.knowledge_base_article USING btree ("organizationId");
CREATE INDEX "IDX_35e120f2b6e5188391cf068d3b" ON public.job_search_category USING btree ("tenantId");
CREATE INDEX "IDX_369eaafb13afe9903a170077ed" ON public.integration_setting USING btree ("organizationId");
CREATE INDEX "IDX_37215da8dee9503d759adb3538" ON public.organization_project USING btree (name);
CREATE INDEX "IDX_37504e920ee5ca46a4000b89da" ON public.expense_category USING btree ("tenantId");
CREATE INDEX "IDX_3826d6ca74a08a8498fa17d330" ON public.expense USING btree (notes);
CREATE INDEX "IDX_38fb85abdf9995efcf217f5955" ON public.deal USING btree ("organizationId");
CREATE INDEX "IDX_391d3f83244fea73c619aecadd" ON public.estimate_email USING btree ("tenantId");
CREATE INDEX "IDX_3b335bbcbf7d5e00853acaa165" ON public.job_search_category USING btree (name);
CREATE INDEX "IDX_3bfdb894d67e6a29aa95780bb4" ON public.organization_employment_type_employee USING btree ("organizationEmploymentTypeId");
CREATE INDEX "IDX_3c3a62226896345c4716bfe1d9" ON public.appointment_employee USING btree ("organizationId");
CREATE INDEX "IDX_3ed17d3e624435e9f2ad71e058" ON public.organization_employment_type_employee USING btree ("employeeId");
CREATE INDEX "IDX_3ee5147bb1fde625fa33c0e956" ON public.employee_recurring_expense USING btree ("organizationId");
CREATE INDEX "IDX_3f02c20145af9997253531349c" ON public.organization_position USING btree (name);
CREATE INDEX "IDX_3f55851a03524e567594d50774" ON public.tag_proposal USING btree ("proposalId");
CREATE UNIQUE INDEX "IDX_40460ab803bf6e5a62b75a35c5" ON public.organization USING btree (profile_link);
CREATE INDEX "IDX_4071f027554eefff65ac8123e6" ON public.request_approval_employee USING btree ("organizationId");
CREATE INDEX "IDX_4177329f5e6ddbfb6416592713" ON public.proposal USING btree ("tenantId");
CREATE INDEX "IDX_41a87d3cfa58c851bbf03ad4e8" ON public.tag_organization_employment_type USING btree ("organizationEmploymentTypeId");
CREATE INDEX "IDX_43459c650957e478203c738574" ON public.event_type USING btree (title);
CREATE INDEX "IDX_43aa2985216560cd9fa93f501e" ON public.goal_kpi USING btree ("tenantId");
CREATE INDEX "IDX_44e22d88b47daf2095491b7cac" ON public.job_search_occupation USING btree ("tenantId");
CREATE INDEX "IDX_4513931e2d530f78d7144c8c7c" ON public.organization_language USING btree ("organizationId");
CREATE INDEX "IDX_451853704de278eef61a37fa7a" ON public.tag_proposal USING btree ("tagId");
CREATE INDEX "IDX_45f32a5a12d42fba17fe62a279" ON public.approval_policy USING btree (name);
CREATE INDEX "IDX_46a3c00bfc3e36b4412d8bcdb0" ON public.deal USING btree ("tenantId");
CREATE INDEX "IDX_47689f911b0cbb16c94a56a9c5" ON public.task_team USING btree ("taskId");
CREATE INDEX "IDX_47ffb82a65c43f102b7e0efa41" ON public.product_option USING btree ("organizationId");
CREATE INDEX "IDX_4989834dd1c9c8ea3576ed99ce" ON public.time_off_request USING btree ("tenantId");
CREATE INDEX "IDX_4ac6fec67719f64909ee6b3299" ON public.integration_entity_setting_tied_entity USING btree ("tenantId");
CREATE INDEX "IDX_4b02d8616129f39fca2b10e98b" ON public.event_type USING btree (duration);
CREATE INDEX "IDX_4b3303a6b7eb92d237a4379734" ON public.employee USING btree ("tenantId");
CREATE INDEX "IDX_4b4e8f61e866248f2ddf8ce181" ON public.tag_task USING btree ("taskId");
CREATE INDEX "IDX_4b5e0ca086e6124eeddf84252f" ON public.tag_organization_team USING btree ("organizationTeamId");
CREATE INDEX "IDX_4bc83945c022a862a33629ff1e" ON public.organization_document USING btree ("tenantId");
CREATE INDEX "IDX_525f4873c6edc3d94559f88900" ON public.email_sent USING btree ("organizationId");
CREATE INDEX "IDX_526f0131260eec308a3bd2b61b" ON public.product_variant_options_product_option USING btree ("productVariantId");
CREATE INDEX "IDX_5311a833ff255881454bd5b3b5" ON public.equipment_sharing_policy USING btree ("organizationId");
CREATE INDEX "IDX_5443ca8ed830626656d8cfecef" ON public.equipment_sharing_policy USING btree ("tenantId");
CREATE INDEX "IDX_55c9568ebe1c4addc3deb6922e" ON public.tag_income USING btree ("incomeId");
CREATE INDEX "IDX_56211336b5ff35fd944f225917" ON public.tenant USING btree (name);
CREATE INDEX "IDX_56dd132aa3743cfa9b034d020e" ON public.organization_vendor USING btree ("organizationId");
CREATE INDEX "IDX_56e96cd218a185ed59b5a8e786" ON public.employee_setting USING btree ("organizationId");
CREATE INDEX "IDX_57f6461f1a710f0f4abdcb8d0e" ON public.equipment_shares_employees USING btree ("employeeId");
CREATE INDEX "IDX_58e4dbff0e1a32a9bdc861bb29" ON public."user" USING btree ("firstName");
CREATE INDEX "IDX_5b0272d923a31c972bed1a1ac4" ON public.task USING btree ("organizationId");
CREATE INDEX "IDX_5bde7aeb2c7fb3a421b175871e" ON public.event_type USING btree (description);
CREATE INDEX "IDX_5f57d077c28b378a6c885e81c5" ON public.expense USING btree (receipt);
CREATE INDEX "IDX_5fde7be40b3c03bc0fdac0c2f6" ON public.employee_recurring_expense USING btree ("tenantId");
CREATE INDEX "IDX_60468af1ce34043a900809c84f" ON public.contact USING btree ("tenantId");
CREATE INDEX "IDX_611e1392c8cc9b101e3ea7ad80" ON public.user_organization USING btree ("tenantId");
CREATE INDEX "IDX_61387780d015923453f4b015b4" ON public.organization_recurring_expense USING btree (currency);
CREATE INDEX "IDX_61593ade5fed9445738ddbe39c" ON public.skill_organization USING btree ("skillId");
CREATE INDEX "IDX_6200736cb4d3617b004e5b647f" ON public.organization_contact USING btree ("organizationId");
CREATE INDEX "IDX_630337302efe97cc93deeb2151" ON public.employee_upwork_job_search_criterion USING btree ("organizationId");
CREATE INDEX "IDX_637ac2c467df4bc3b71795a866" ON public.organization_recurring_expense USING btree ("parentRecurringExpenseId");
CREATE INDEX "IDX_63c61a88461ff5c115c3b6bcde" ON public.time_slot_time_logs USING btree ("timeSlotId");
CREATE INDEX "IDX_64409de4711cd14e2c43371cc0" ON public.income USING btree ("organizationId");
CREATE INDEX "IDX_683274c59fb08b21249096e305" ON public.pipeline USING btree ("tenantId");
CREATE INDEX "IDX_685bf353c85f23b6f848e4dcde" ON public."user" USING btree ("tenantId");
CREATE INDEX "IDX_68e75e49f06409fd385b4f8774" ON public.employee_job_preset USING btree ("employeeId");
CREATE INDEX "IDX_6912685bbb0e303eab392978d9" ON public.employee_award USING btree (name);
CREATE INDEX "IDX_6a289b10030ae86903406e3c9b" ON public.product_variant USING btree ("organizationId");
CREATE INDEX "IDX_6a58ed56a12604c076a8e0cfda" ON public.tag_user USING btree ("userId");
CREATE INDEX "IDX_6b4758a5442713070c9a366d0e" ON public.goal USING btree ("tenantId");
CREATE INDEX "IDX_6b5b0c3d994f59d9c800922257" ON public.organization_project_employee USING btree ("employeeId");
CREATE INDEX "IDX_6c6576bff4b497a4975337fa5e" ON public.tag_request_approval USING btree ("tagId");
CREATE INDEX "IDX_6cc2b2052744e352834a4c9e78" ON public.organization USING btree (banner);
CREATE INDEX "IDX_6d171c9d5f81095436b99da5e6" ON public.expense USING btree ("tenantId");
CREATE INDEX "IDX_6e570174fda71e97616e9d2eea" ON public.employee_recurring_expense USING btree ("parentRecurringExpenseId");
CREATE INDEX "IDX_6eba1a52ee121d100c8a0a6510" ON public.country USING btree ("isoCode");
CREATE INDEX "IDX_6ee5218c869b57197e4a209bed" ON public.job_search_category USING btree ("jobSource");
CREATE INDEX "IDX_6f1108552ea7a70a4d958b338c" ON public.tag_expense USING btree ("expenseId");
CREATE INDEX "IDX_6f48a21f83b1c03f3b92c4eeaf" ON public.integration_entity_setting_tied_entity USING btree ("organizationId");
CREATE INDEX "IDX_7022dafd72c1b92f7d50691441" ON public.integration_map USING btree ("organizationId");
CREATE INDEX "IDX_7052eaf00a5795afa5ebf35995" ON public.product_variant_price USING btree ("tenantId");
CREATE INDEX "IDX_710c71526edb89b2a7033abcdf" ON public.employee_setting USING btree (currency);
CREATE INDEX "IDX_7143f31467178a6164a42426c1" ON public.user_organization USING btree ("organizationId");
CREATE INDEX "IDX_727dbf5e1100023681e216d6a9" ON public.tag_organization_expense_category USING btree ("tagId");
CREATE INDEX "IDX_739f8cdce21cc72d400559ce00" ON public.employee_recurring_expense USING btree (currency);
CREATE INDEX "IDX_745a293c8b2c750bc421fa0633" ON public.organization USING btree ("tenantId");
CREATE INDEX "IDX_74938a30181630c480b36e27d7" ON public.tag_request_approval USING btree ("requestApprovalId");
CREATE INDEX "IDX_753e005a45556b5909e11937aa" ON public.email_template USING btree ("tenantId");
CREATE INDEX "IDX_760034f54e598d519b5f0c4ece" ON public.skill_employee USING btree ("employeeId");
CREATE INDEX "IDX_7719d73cd16a9f57ecc6ac24b3" ON public.contact USING btree ("organizationId");
CREATE INDEX "IDX_77e1050669b32cfff482f96016" ON public.request_approval_team USING btree ("organizationId");
CREATE UNIQUE INDEX "IDX_78a916df40e02a9deb1c4b75ed" ON public."user" USING btree (username);
CREATE INDEX "IDX_790858593698e54cba501eb690" ON public.task_employee USING btree ("taskId");
CREATE INDEX "IDX_7ae5b4d4bdec77971dab319f2e" ON public.employee_job_preset USING btree ("jobPresetId");
CREATE INDEX "IDX_7b74c481eb00ffa33efeae7fbd" ON public.tag_organization_employee_level USING btree ("tagId");
CREATE INDEX "IDX_7ca79ff010025397cf9f216bde" ON public.tag_organization USING btree ("organizationId");
CREATE INDEX "IDX_7ccef49dd56c8c74daa8d12186" ON public.equipment_shares_teams USING btree ("organizationTeamId");
CREATE INDEX "IDX_7cf84e8b5775f349f81a1f3cc4" ON public.organization_project USING btree ("tenantId");
CREATE INDEX "IDX_7d7f69c79df4a6f152b0e362b1" ON public.time_off_policy USING btree (name);
CREATE INDEX "IDX_7dde3307daf6d6dec1513ecc56" ON public.tag_organization_vendor USING btree ("organizationVendorId");
CREATE INDEX "IDX_7e0bf6063e1728c9813d5da7ca" ON public.organization_vendor USING btree ("tenantId");
CREATE INDEX "IDX_7e53ea80aca15da11a8a5ec038" ON public.job_preset USING btree ("tenantId");
CREATE INDEX "IDX_7e688e6613930ba721b841db43" ON public.email_template USING btree ("languageCode");
CREATE INDEX "IDX_81558bb2bef673628d92540b4e" ON public.knowledge_base_author USING btree ("organizationId");
CREATE INDEX "IDX_82c5edbd179359212f16f0d386" ON public.time_slot_minute USING btree ("organizationId");
CREATE INDEX "IDX_8307c5c44a4ad6210b767b17a9" ON public.role_permission USING btree (permission);
CREATE INDEX "IDX_8343741e7929043b2a7de89f73" ON public.request_approval USING btree ("organizationId");
CREATE INDEX "IDX_846a933af451a33b95b7b198c6" ON public.expense USING btree (amount);
CREATE INDEX "IDX_847e4d7a8a918a2e471c78456c" ON public.organization_employee_level USING btree ("organizationId");
CREATE INDEX "IDX_853302351eaa4daa39920c270a" ON public.product_category USING btree ("organizationId");
CREATE INDEX "IDX_8608b275644cfc7a0f3f585081" ON public.income USING btree ("tenantId");
CREATE INDEX "IDX_86381fb6d28978b101b3aec8ca" ON public.job_search_category USING btree ("organizationId");
CREATE INDEX "IDX_8676224f55a965c53e4bb7cbf8" ON public.equipment_shares_employees USING btree ("equipmentSharingId");
CREATE INDEX "IDX_86b5a121b3775a1b0b7fa75680" ON public.income USING btree (currency);
CREATE INDEX "IDX_86cf36c137712e779dd7e2301e" ON public.employee_appointment USING btree ("organizationId");
CREATE INDEX "IDX_873ade98fbd6ca71c8b4d1bbca" ON public.pipeline USING btree ("organizationId");
CREATE INDEX "IDX_89508d119b1a279c037d9da151" ON public.expense USING btree (currency);
CREATE INDEX "IDX_8a06f5aded97d1b5e81005e121" ON public.tag_organization_contact USING btree ("tagId");
CREATE INDEX "IDX_8a12e7a0d47d3c6a6b35f7984e" ON public.organization_recurring_expense USING btree ("organizationId");
CREATE INDEX "IDX_8a1fe8afb3aa672bae5993fbe7" ON public.organization_sprint USING btree ("organizationId");
CREATE INDEX "IDX_8ac2c6b487d03157adda874789" ON public.key_result USING btree ("tenantId");
CREATE INDEX "IDX_8dcfbd0d960672fefe681bcba9" ON public.tag_expense USING btree ("tagId");
CREATE INDEX "IDX_8dd2062499a6c2a708ddd05650" ON public.integration_integration_type USING btree ("integrationTypeId");
CREATE INDEX "IDX_8e502eac7ed1347c71c26beae8" ON public.skill USING btree ("tenantId");
CREATE INDEX "IDX_904a731b2ae6bc1aa52c8302a9" ON public.tag_organization_employment_type USING btree ("tagId");
CREATE INDEX "IDX_9121e00c4dc3500dc610cf8722" ON public.product_variant USING btree ("tenantId");
CREATE INDEX "IDX_91b652409dc1fb2f712590dd21" ON public.organization_department USING btree (name);
CREATE INDEX "IDX_91e0f7efcd17d20b5029fb1342" ON public.employee_award USING btree ("tenantId");
CREATE INDEX "IDX_92fc62260c0c7ff108622850bf" ON public.event_type USING btree ("tenantId");
CREATE INDEX "IDX_93c209e697a18a22b9e4027a30" ON public.expense USING btree ("organizationContactName");
CREATE INDEX "IDX_94b2a3d0f17c9549dea1493dc9" ON public.request_approval_team USING btree ("tenantId");
CREATE INDEX "IDX_9516a627a131626d2a5738a05a" ON public.employee_setting USING btree ("tenantId");
CREATE INDEX "IDX_9537fae454ebebc98ee5adb3a2" ON public.employee_setting USING btree ("settingType");
CREATE INDEX "IDX_953df0eb0df3035baf140399f6" ON public.email_sent USING btree (name);
CREATE INDEX "IDX_954c6b05297814776d9cb66ca7" ON public.integration_setting USING btree ("tenantId");
CREATE INDEX "IDX_95ea18af6ef8123503d332240c" ON public.employee_setting USING btree ("employeeId");
CREATE INDEX "IDX_97ed0e2b80f2e7ec260fd81cd9" ON public.expense USING btree ("rateValue");
CREATE INDEX "IDX_981333982a6df8b815957dcbf2" ON public.time_off_request USING btree ("organizationId");
CREATE INDEX "IDX_985d235aa5394937c4493262c7" ON public.product_option USING btree ("tenantId");
CREATE INDEX "IDX_9971c4171ae051e74b833984a3" ON public.expense USING btree ("projectId");
CREATE INDEX "IDX_9c9bfe5baaf83f53533ff035fc" ON public.expense_category USING btree ("organizationId");
CREATE INDEX "IDX_9d5980ff1064e2edb77509d312" ON public.event_type USING btree ("durationUnit");
CREATE INDEX "IDX_9d8afc1e1e64d4b7d48dd2229d" ON public.organization_project USING btree ("organizationId");
CREATE INDEX "IDX_9ea70bf5c390b00e7bb96b86ed" ON public.organization USING btree (overview);
CREATE INDEX "IDX_9f1288205ae91f91cf356cac2f" ON public.job_search_occupation USING btree (name);
CREATE INDEX "IDX_9feaa23ed7bc47d51315e304bb" ON public.request_approval USING btree ("tenantId");
CREATE INDEX "IDX_a0409e39f23ff6d418f2c03df5" ON public.organization_position USING btree ("organizationId");
CREATE INDEX "IDX_a35637bb659c59e18adb4f38f8" ON public.employee_appointment USING btree ("tenantId");
CREATE INDEX "IDX_a4b038417e3221c0791dd8c771" ON public.job_preset USING btree ("organizationId");
CREATE INDEX "IDX_a4b5a2ea2afecf1ee254f1a704" ON public.employee_recurring_expense USING btree ("categoryName");
CREATE INDEX "IDX_a5445b38b780b29b09369e36a9" ON public.request_approval_employee USING btree ("tenantId");
CREATE INDEX "IDX_a583cfe32f492f5ba99b7bb205" ON public.organization_employment_type USING btree ("organizationId");
CREATE INDEX "IDX_a8f497b1006ec967964abb0d49" ON public.organization_position USING btree ("tenantId");
CREATE INDEX "IDX_aca65a79fe0c1ec9e6a59022c5" ON public.timesheet USING btree ("organizationId");
CREATE INDEX "IDX_ae4578dcaed5adff96595e6166" ON public.role USING btree (name);
CREATE INDEX "IDX_aed2d5cc5680fba9d387c7f931" ON public.time_log USING btree ("organizationId");
CREATE INDEX "IDX_af6423760433da72002a7f369e" ON public.organization_award USING btree ("tenantId");
CREATE INDEX "IDX_afe6c40d3d9951388fa05f83f2" ON public.employee_upwork_job_search_criterion USING btree ("tenantId");
CREATE INDEX "IDX_affdab301e348b892175f30fa3" ON public.tenant_setting USING btree ("tenantId");
CREATE INDEX "IDX_b03a8a28f6ebdb6df8f630216b" ON public.organization USING btree ("totalEmployees");
CREATE INDEX "IDX_b08dd29fb6a8acdf83c83d8988" ON public.tag USING btree ("tenantId");
CREATE INDEX "IDX_b1ffe2a63a48b486e18dc59d1b" ON public.tag_employee USING btree ("tagId");
CREATE INDEX "IDX_b2923d394f3636671ff9b3c3e8" ON public.skill USING btree ("organizationId");
CREATE INDEX "IDX_b3644ff7cd65239e29d292a41d" ON public.organization_department USING btree ("tenantId");
CREATE INDEX "IDX_b407841271245501dd1a8c7551" ON public.time_slot USING btree ("organizationId");
CREATE INDEX "IDX_b5bb8f62d401475fcc8c2ba35e" ON public.expense USING btree ("typeOfExpense");
CREATE INDEX "IDX_b65cfda00c52e1fc26cc96e52c" ON public.skill_organization USING btree ("organizationId");
CREATE INDEX "IDX_b69fa5d1b1d02cdbe301ea6b10" ON public.tag_organization_project USING btree ("organizationProjectId");
CREATE INDEX "IDX_b8284109257b5137256b5b3e84" ON public.time_slot USING btree ("tenantId");
CREATE INDEX "IDX_bb0062d51a75164fcb64041ee7" ON public.tag_equipment USING btree ("equipmentId");
CREATE INDEX "IDX_bc18d23a1a53d4bba0b179b152" ON public.tag_organization_employee_level USING btree ("organizationEmployeeLevelId");
CREATE INDEX "IDX_bcb30c9893f4c8d0c4e556b4ed" ON public.knowledge_base USING btree ("tenantId");
CREATE INDEX "IDX_bd39a647a2843177723ddf733e" ON public.income USING btree (amount);
CREATE INDEX "IDX_bed9d45e15866d9b8e87e7a7bf" ON public.product_variant_setting USING btree ("organizationId");
CREATE INDEX "IDX_beffeb7f338fa98354948c0789" ON public.organization_contact_employee USING btree ("organizationContactId");
CREATE INDEX "IDX_bf7c34187a346f499e4dbc4b08" ON public.tag_task USING btree ("tagId");
CREATE INDEX "IDX_c160fe6234675fac031aa3e7c5" ON public.email_template USING btree ("organizationId");
CREATE INDEX "IDX_c210effeb6314d325bc024d21e" ON public.organization_project USING btree (currency);
CREATE INDEX "IDX_c21e615583a3ebbb0977452afb" ON public.organization USING btree (name);
CREATE INDEX "IDX_c2744cffeca55c3c9c52bb9789" ON public.time_off_policy USING btree ("organizationId");
CREATE INDEX "IDX_c2c9cd2ea533d5442de455fb3e" ON public.tag_organization_department USING btree ("organizationDepartmentId");
CREATE INDEX "IDX_c2f6bec0b39eaa3a6d90903ae9" ON public.tag USING btree ("organizationId");
CREATE INDEX "IDX_c34e79a3aa682bbd3f0e8cf4c4" ON public.organization_department_employee USING btree ("organizationDepartmentId");
CREATE INDEX "IDX_c451f53f5a6cd97db94e1c9482" ON public.time_off_policy_employee USING btree ("employeeId");
CREATE INDEX "IDX_c5fb146726ff128e600f23d0a1" ON public.expense USING btree ("organizationId");
CREATE INDEX "IDX_c61a562a2379d1c0077fe7de33" ON public.organization_department USING btree ("organizationId");
CREATE INDEX "IDX_c63fafc733ff8ab37dede8ffec" ON public.request_approval USING btree (name);
CREATE INDEX "IDX_c6a48286f3aa8ae903bee0d1e7" ON public.employee USING btree ("organizationId");
CREATE INDEX "IDX_c6c01e38eebd8b26b9214b9044" ON public.integration_entity_setting USING btree ("organizationId");
CREATE INDEX "IDX_c6e8ae55a4db3584686cbf6afe" ON public.goal USING btree ("organizationId");
CREATE INDEX "IDX_c71c381e77b0543ed4023aeef7" ON public.tag_organization_position USING btree ("tagId");
CREATE INDEX "IDX_c75285bf286b17c7ca5537857b" ON public.organization USING btree (client_focus);
CREATE INDEX "IDX_c7f72cb68b22b8ab988158e4d2" ON public.time_slot_minute USING btree ("tenantId");
CREATE INDEX "IDX_c8723c90a6f007f8d7e882a04f" ON public.job_search_occupation USING btree ("jobSource");
CREATE INDEX "IDX_c9a85b16615bc5c3035802adb0" ON public.tag_integration USING btree ("integrationId");
CREATE INDEX "IDX_ca24fc59aac015d9660955f5f6" ON public.user_organization USING btree ("isActive");
CREATE INDEX "IDX_caf8363b0ed7d5f24ae866ba3b" ON public.employee_award USING btree ("organizationId");
CREATE INDEX "IDX_cb64573b18dd7b23f591f15502" ON public.job_search_occupation USING btree ("jobSourceOccupationId");
CREATE INDEX "IDX_cbd053921056e77c0a8e03122a" ON public.role_permission USING btree ("tenantId");
CREATE INDEX "IDX_cbfebdb1419f9b8036a8b0546e" ON public.expense USING btree (purpose);
CREATE INDEX "IDX_cc28a54171231fbd9a127051f0" ON public.proposal USING btree ("jobPostUrl");
CREATE INDEX "IDX_cd2bd8302bfb6093d0908c36dc" ON public.organization_contact_employee USING btree ("employeeId");
CREATE INDEX "IDX_cd312469204347b1210397770a" ON public.time_off_request_employee USING btree ("employeeId");
CREATE INDEX "IDX_cd9cbc0d5b6d62dbb63c3b3a65" ON public.key_result_update USING btree ("tenantId");
CREATE INDEX "IDX_d0a798419c775b9157bf0269f4" ON public.job_search_category USING btree ("jobSourceCategoryId");
CREATE INDEX "IDX_d1f45ca98f17bd84a5e430feaf" ON public.key_result USING btree ("organizationId");
CREATE INDEX "IDX_d544bd3a63634a4438509ac958" ON public.availability_slot USING btree ("organizationId");
CREATE INDEX "IDX_d59ec6899d435f430799795ad7" ON public.proposal USING btree ("organizationId");
CREATE INDEX "IDX_d5ca48cfacfb516543d6507ca4" ON public.job_preset_upwork_job_search_criterion USING btree ("organizationId");
CREATE INDEX "IDX_d8eba1c0e500c60be1b69c1e77" ON public.organization_team_employee USING btree ("organizationId");
CREATE INDEX "IDX_dcc3921143cc59ff192ac8bfd5" ON public.organization_employee_level USING btree ("tenantId");
CREATE INDEX "IDX_dd8ab9312fb8d787982b9feebf" ON public.expense USING btree ("taxType");
CREATE INDEX "IDX_de33f92e042365d196d959e774" ON public.organization_contact USING btree (name);
CREATE INDEX "IDX_dfe3b357df3ce136917b1f0984" ON public.approval_policy USING btree ("organizationId");
CREATE INDEX "IDX_e0ddfccfe9816681c410ebf2b9" ON public.tag_employee USING btree ("employeeId");
CREATE UNIQUE INDEX "IDX_e12875dfb3b1d92d7d7c5377e2" ON public."user" USING btree (email);
CREATE INDEX "IDX_e3130a39c1e4a740d044e68573" ON public.role_permission USING btree ("roleId");
CREATE INDEX "IDX_e46203bf1dbf3291d174f02cb3" ON public.product_category_translation USING btree ("organizationId");
CREATE INDEX "IDX_e49e37fe88a2725a38a3b05849" ON public.goal_kpi USING btree ("organizationId");
CREATE INDEX "IDX_e4e4120b0c19d3a207ce38d758" ON public.product_type USING btree ("organizationId");
CREATE INDEX "IDX_e516b4a2a1a8d4beda7217eeac" ON public.tag_product USING btree ("productId");
CREATE INDEX "IDX_e56e80136b07ecd52545368611" ON public.organization_vendor USING btree (name);
CREATE INDEX "IDX_e64a306f3215dbb99bbb26ca59" ON public.tag_user USING btree ("tagId");
CREATE INDEX "IDX_e68c43e315ad3aaea4e99cf461" ON public.organization_contact USING btree ("tenantId");
CREATE INDEX "IDX_e699b50ca468e75bbd36913dcc" ON public.skill_employee USING btree ("skillId");
CREATE INDEX "IDX_e91cbff3d206f150ccc14d0c3a" ON public.task USING btree ("tenantId");
CREATE INDEX "IDX_e96a71affe63c97f7fa2f076da" ON public.product_variant_options_product_option USING btree ("productOptionId");
CREATE INDEX "IDX_ea9254be07ae4a8604f0aaab19" ON public.equipment_sharing USING btree ("organizationId");
CREATE INDEX "IDX_eec3d6064578610ddc609dd360" ON public.integration_map USING btree ("tenantId");
CREATE INDEX "IDX_eef1c19a0cb5321223cfe3286c" ON public.organization_team USING btree ("organizationId");
CREATE INDEX "IDX_f008a481cb4eed547704bb9d83" ON public.availability_slot USING btree ("tenantId");
CREATE INDEX "IDX_f0e1b4ecdca13b177e2e3a0613" ON public."user" USING btree ("lastName");
CREATE INDEX "IDX_f1e5497ee6be7ba3f2ee90bf4b" ON public.organization_recurring_expense USING btree ("categoryName");
CREATE INDEX "IDX_f206c807fc7e41fc8a8b6679ae" ON public.product_type USING btree ("tenantId");
CREATE INDEX "IDX_f2401d8fdff5d8970dfe30d3ae" ON public.activity USING btree ("tenantId");
CREATE INDEX "IDX_f2c1b6770dd2a3abfa35f49411" ON public.job_preset USING btree (name);
CREATE INDEX "IDX_f37d866c3326eca5f579cef35c" ON public.organization USING btree (short_description);
CREATE INDEX "IDX_f38b1bd46f8831704348003bbf" ON public.task_employee USING btree ("employeeId");
CREATE INDEX "IDX_f57ad03c4e471bd8530494ea63" ON public.organization_sprint USING btree ("tenantId");
CREATE INDEX "IDX_f5e70849adc6f2f81fcbccae77" ON public.tag_organization USING btree ("tagId");
CREATE INDEX "IDX_f71369c1cb86ae9fd4d5452f9a" ON public.tag_organization_vendor USING btree ("tagId");
CREATE INDEX "IDX_f75a28915b38d926902c0f85b2" ON public.tag_product USING btree ("tagId");
CREATE INDEX "IDX_f84171695b7aedfc454483bcf2" ON public.equipment_shares_teams USING btree ("equipmentSharingId");
CREATE INDEX "IDX_f98ce0d210aa9f91b729d44780" ON public.equipment USING btree ("organizationId");
CREATE INDEX "IDX_fa525e61fb3d8d9efec0f364a4" ON public.equipment_sharing USING btree ("tenantId");
CREATE INDEX "IDX_fa9018cb248ea0f3b2b30ef143" ON public.time_log USING btree ("tenantId");
CREATE INDEX "IDX_fb6808468066849ab7b7454d5f" ON public.equipment USING btree ("tenantId");
CREATE INDEX "IDX_fc8818d6fde74370ec703a0135" ON public.event_type USING btree ("organizationId");
CREATE INDEX "IDX_fd4b0cb7a44ed914acdda55e29" ON public.key_result_update USING btree ("organizationId");
CREATE INDEX "IDX_fdb3f018c2bba4885bfa5757d1" ON public.activity USING btree ("organizationId");
CREATE INDEX "IDX_fe12e1b76bbb76209134d9bdc2" ON public.organization_team_employee USING btree ("tenantId");
CREATE INDEX "IDX_feb9c36261ea75aa94cee4ecd6" ON public.income USING btree ("clientName");
ALTER TABLE ONLY public.tag_income
    ADD CONSTRAINT "FK_00e2fd30761a36911648166044c" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_equipment
    ADD CONSTRAINT "FK_0360b8197c2a38d6fe882cb1aff" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.pipeline_stage
    ADD CONSTRAINT "FK_04d16bdd72668de12c3e41a85a6" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.knowledge_base_article
    ADD CONSTRAINT "FK_06a9902fedc1f9dcdbaf14afb01" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product
    ADD CONSTRAINT "FK_08293ca31a601d3cd0228120bc9" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_event_type
    ADD CONSTRAINT "FK_094af399a26d4a1d3ae17ea11e3" FOREIGN KEY ("eventTypeId") REFERENCES public.event_type(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.screenshot
    ADD CONSTRAINT "FK_0951aacffe3f8d0cff54cf2f341" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product_category
    ADD CONSTRAINT "FK_0a0cf25cd8232a154d1cce2641c" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.time_off_request_employee
    ADD CONSTRAINT "FK_0a8cf0aacf95ce66e73e75a95cf" FOREIGN KEY ("timeOffRequestId") REFERENCES public.time_off_request(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee_recurring_expense
    ADD CONSTRAINT "FK_0ac8526c48a3daa267c86225fb5" FOREIGN KEY ("employeeId") REFERENCES public.employee(id);
ALTER TABLE ONLY public.email_sent
    ADD CONSTRAINT "FK_0af511c44de7a16beb45cc37852" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_recurring_expense
    ADD CONSTRAINT "FK_0b19a287858af40661bd3eb7411" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee_award
    ADD CONSTRAINT "FK_0c5266f3f488add404f92d56ec7" FOREIGN KEY ("employeeId") REFERENCES public.employee(id);
ALTER TABLE ONLY public.product_variant_price
    ADD CONSTRAINT "FK_0cfba32db58a952f58b1e35cf1c" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_department_employee
    ADD CONSTRAINT "FK_0d4f83695591ae3c98a0544ac8d" FOREIGN KEY ("employeeId") REFERENCES public.employee(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_organization_department
    ADD CONSTRAINT "FK_0eb285a6b1ac7e3d0a542e50a4b" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.equipment_sharing
    ADD CONSTRAINT "FK_0ecfe0ce0cd2b197249d5f1c105" FOREIGN KEY ("equipmentSharingPolicyId") REFERENCES public.equipment_sharing_policy(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.task_team
    ADD CONSTRAINT "FK_0ef34c9f9d6dc8d14f1fbb10e86" FOREIGN KEY ("organizationTeamId") REFERENCES public.organization_team(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_integration
    ADD CONSTRAINT "FK_0f19ad9872190b7a67a9652d5e1" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.time_off_policy_employee
    ADD CONSTRAINT "FK_0f823750ac5a7d899cc5d8d0402" FOREIGN KEY ("timeOffPolicyId") REFERENCES public.time_off_policy(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_document
    ADD CONSTRAINT "FK_1057ec001a4c6b258658143047a" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_organization_expense_category
    ADD CONSTRAINT "FK_107a93f89c8f31f4386ae4b19d9" FOREIGN KEY ("expenseCategoryId") REFERENCES public.expense_category(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.email_sent
    ADD CONSTRAINT "FK_1261c457b3035b77719556995bf" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.approval_policy
    ADD CONSTRAINT "FK_1462391059ebe137645098d7276" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.knowledge_base_author
    ADD CONSTRAINT "FK_1551e821871d9230cc0dafbbe58" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.role
    ADD CONSTRAINT "FK_1751a572e91385a09d41c624714" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_team
    ADD CONSTRAINT "FK_176f5ed3c4534f3110d423d5690" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_organization_project
    ADD CONSTRAINT "FK_18be859b371e9159dfc2cecbe13" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.job_search_occupation
    ADD CONSTRAINT "FK_1a62a99e1016e4a2b461e886ecd" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.deal
    ADD CONSTRAINT "FK_1ae3abc0ae1dcf6c13f49b62b56" FOREIGN KEY ("clientId") REFERENCES public.organization_contact(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee
    ADD CONSTRAINT "FK_1c0c1370ecd98040259625e17e2" FOREIGN KEY ("contactId") REFERENCES public.contact(id);
ALTER TABLE ONLY public.time_off_policy
    ADD CONSTRAINT "FK_1c0ed84d54f8fbe4af10dfcda1c" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.time_log
    ADD CONSTRAINT "FK_1ddf2da35e34378fd845d80a18b" FOREIGN KEY ("taskId") REFERENCES public.task(id);
ALTER TABLE ONLY public.task
    ADD CONSTRAINT "FK_1e1f64696aa3a26d3e12c840e55" FOREIGN KEY ("organizationSprintId") REFERENCES public.organization_sprint(id) ON DELETE SET NULL;
ALTER TABLE ONLY public.tag_organization_position
    ADD CONSTRAINT "FK_1f7e0230bc542d7037810203786" FOREIGN KEY ("organizationPositionId") REFERENCES public.organization_position(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_organization_contact
    ADD CONSTRAINT "FK_1fb664a63f20bea6a3f0b387713" FOREIGN KEY ("organizationContactId") REFERENCES public.organization_contact(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.knowledge_base
    ADD CONSTRAINT "FK_222a654639ae20c36bc56793094" FOREIGN KEY ("articlesId") REFERENCES public.knowledge_base_article(id);
ALTER TABLE ONLY public.organization_language
    ADD CONSTRAINT "FK_225e476592214e32e117a85213c" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_employment_type
    ADD CONSTRAINT "FK_227b5bd9867287cbbeece8f6ba9" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.job_preset_upwork_job_search_criterion
    ADD CONSTRAINT "FK_2323220b4decfd2f4d8307fd78f" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.estimate_email
    ADD CONSTRAINT "FK_233c1d351d63441aeb039d1164f" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.screenshot
    ADD CONSTRAINT "FK_235004f3dafac90692cd64d9158" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_organization_team
    ADD CONSTRAINT "FK_2382356b63c832a137079210bd1" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.integration_entity_setting
    ADD CONSTRAINT "FK_23e9cfcf1bfff07dcc3254378df" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.event_type
    ADD CONSTRAINT "FK_24d905ec9e127ade23754a363dd" FOREIGN KEY ("employeeId") REFERENCES public.employee(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.integration_tenant
    ADD CONSTRAINT "FK_24e37d03ef224f1a16a35069c2c" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.timesheet
    ADD CONSTRAINT "FK_25b8df69c9b7f5752c6a6a6ef7f" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.request_approval
    ADD CONSTRAINT "FK_26bb3420001d31337393ed05bc3" FOREIGN KEY ("approvalPolicyId") REFERENCES public.approval_policy(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.activity
    ADD CONSTRAINT "FK_2743f8990fde12f9586287eb09f" FOREIGN KEY ("taskId") REFERENCES public.task(id);
ALTER TABLE ONLY public.product_category_translation
    ADD CONSTRAINT "FK_27d71aa2e843f07fbf36329be3f" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.pipeline_stage
    ADD CONSTRAINT "FK_28965bf63ad4c0976892d0fd5e8" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.user_organization
    ADD CONSTRAINT "FK_29c3c8cc3ea9db22e4a347f4b5a" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.knowledge_base
    ADD CONSTRAINT "FK_2ba72a9dec732a10e8c05bcdec1" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_project_employee
    ADD CONSTRAINT "FK_2ba868f42c2301075b7c141359e" FOREIGN KEY ("organizationProjectId") REFERENCES public.organization_project(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.appointment_employee
    ADD CONSTRAINT "FK_2c0494466d5a7e1165cea3dca98" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product_option
    ADD CONSTRAINT "FK_2ca1aab0a82e9c0058d8465ad02" FOREIGN KEY ("productId") REFERENCES public.product(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.employee_upwork_job_search_criterion
    ADD CONSTRAINT "FK_2dc73e07ac7040f273cea3c999d" FOREIGN KEY ("jobPresetId") REFERENCES public.job_preset(id);
ALTER TABLE ONLY public.product_type_translation
    ADD CONSTRAINT "FK_2dd271bdeb602b8c3956287e33c" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_award
    ADD CONSTRAINT "FK_2e0d21aab892b5993abaac09bcd" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product_variant_setting
    ADD CONSTRAINT "FK_2efe48435d4ba480a4bb8b96fa6" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee_appointment
    ADD CONSTRAINT "FK_2f58132c57108540887dc3e88eb" FOREIGN KEY ("employeeId") REFERENCES public.employee(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.time_slot_time_logs
    ADD CONSTRAINT "FK_2fc2675c79cb3cbceb32bf2dc7a" FOREIGN KEY ("timeLogId") REFERENCES public.time_log(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product_type_translation
    ADD CONSTRAINT "FK_30aafca59cdb456bf5231f9e463" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product
    ADD CONSTRAINT "FK_32a4bdd261ec81f4ca6b3abe262" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.integration_tenant
    ADD CONSTRAINT "FK_33ab224e7755a46fff5bc1e64e5" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_event_type
    ADD CONSTRAINT "FK_34b8f471aac00eaec6f2830e5bb" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.integration_integration_type
    ADD CONSTRAINT "FK_34c86921ee9b462bc5c7b61fad4" FOREIGN KEY ("integrationId") REFERENCES public.integration(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.integration_setting
    ADD CONSTRAINT "FK_34daf030004ad37b88f1f3d863c" FOREIGN KEY ("integrationId") REFERENCES public.integration_tenant(id);
ALTER TABLE ONLY public.knowledge_base_article
    ADD CONSTRAINT "FK_3547f82f867489542ceae58a49e" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.goal
    ADD CONSTRAINT "FK_35526ff1063ab5fa2b20e71bd66" FOREIGN KEY ("ownerEmployeeId") REFERENCES public.employee(id);
ALTER TABLE ONLY public.job_search_category
    ADD CONSTRAINT "FK_35e120f2b6e5188391cf068d3ba" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.integration_setting
    ADD CONSTRAINT "FK_369eaafb13afe9903a170077edb" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.expense_category
    ADD CONSTRAINT "FK_37504e920ee5ca46a4000b89da5" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.task
    ADD CONSTRAINT "FK_3797a20ef5553ae87af126bc2fe" FOREIGN KEY ("projectId") REFERENCES public.organization_project(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.integration_entity_setting_tied_entity
    ADD CONSTRAINT "FK_37f2aa93cb7f02bcd1e53ff86e9" FOREIGN KEY ("integrationEntitySettingId") REFERENCES public.integration_entity_setting(id);
ALTER TABLE ONLY public.key_result
    ADD CONSTRAINT "FK_38dc003f3484eff4b59918e9ae3" FOREIGN KEY ("projectId") REFERENCES public.organization_project(id);
ALTER TABLE ONLY public.deal
    ADD CONSTRAINT "FK_38fb85abdf9995efcf217f59554" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.estimate_email
    ADD CONSTRAINT "FK_391d3f83244fea73c619aecadd9" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_employment_type_employee
    ADD CONSTRAINT "FK_3bfdb894d67e6a29aa95780bb47" FOREIGN KEY ("organizationEmploymentTypeId") REFERENCES public.organization_employment_type(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.appointment_employee
    ADD CONSTRAINT "FK_3c3a62226896345c4716bfe1d96" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.key_result
    ADD CONSTRAINT "FK_3e1d08761a717c1dd71fe67249b" FOREIGN KEY ("goalId") REFERENCES public.goal(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_employment_type_employee
    ADD CONSTRAINT "FK_3ed17d3e624435e9f2ad71e0583" FOREIGN KEY ("employeeId") REFERENCES public.employee(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee_recurring_expense
    ADD CONSTRAINT "FK_3ee5147bb1fde625fa33c0e956b" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_proposal
    ADD CONSTRAINT "FK_3f55851a03524e567594d507744" FOREIGN KEY ("proposalId") REFERENCES public.proposal(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.request_approval_employee
    ADD CONSTRAINT "FK_4071f027554eefff65ac8123e6e" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.proposal
    ADD CONSTRAINT "FK_4177329f5e6ddbfb64165927134" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_organization_employment_type
    ADD CONSTRAINT "FK_41a87d3cfa58c851bbf03ad4e8d" FOREIGN KEY ("organizationEmploymentTypeId") REFERENCES public.organization_employment_type(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product_variant
    ADD CONSTRAINT "FK_41b31a71dda350cfe5da07e0e4f" FOREIGN KEY ("priceId") REFERENCES public.product_variant_price(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_language
    ADD CONSTRAINT "FK_4257071e7bc0f0552c6feb16f33" FOREIGN KEY ("languageId") REFERENCES public.language(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.expense
    ADD CONSTRAINT "FK_42eea5debc63f4d1bf89881c10a" FOREIGN KEY ("categoryId") REFERENCES public.expense_category(id);
ALTER TABLE ONLY public.goal_kpi
    ADD CONSTRAINT "FK_43aa2985216560cd9fa93f501e5" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.job_search_occupation
    ADD CONSTRAINT "FK_44e22d88b47daf2095491b7cac3" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_language
    ADD CONSTRAINT "FK_4513931e2d530f78d7144c8c7cd" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_proposal
    ADD CONSTRAINT "FK_451853704de278eef61a37fa7a6" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.deal
    ADD CONSTRAINT "FK_46a3c00bfc3e36b4412d8bcdb08" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.availability_slot
    ADD CONSTRAINT "FK_46ed3c2287423f5dc089100feeb" FOREIGN KEY ("employeeId") REFERENCES public.employee(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.task_team
    ADD CONSTRAINT "FK_47689f911b0cbb16c94a56a9c50" FOREIGN KEY ("taskId") REFERENCES public.task(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product_option
    ADD CONSTRAINT "FK_47ffb82a65c43f102b7e0efa41a" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.time_off_request
    ADD CONSTRAINT "FK_4989834dd1c9c8ea3576ed99ce5" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.integration_entity_setting_tied_entity
    ADD CONSTRAINT "FK_4ac6fec67719f64909ee6b3299d" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.deal
    ADD CONSTRAINT "FK_4b1ff44e6bae5065429dbab554b" FOREIGN KEY ("createdByUserId") REFERENCES public."user"(id);
ALTER TABLE ONLY public.employee
    ADD CONSTRAINT "FK_4b3303a6b7eb92d237a4379734e" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_task
    ADD CONSTRAINT "FK_4b4e8f61e866248f2ddf8ce181a" FOREIGN KEY ("taskId") REFERENCES public.task(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_organization_team
    ADD CONSTRAINT "FK_4b5e0ca086e6124eeddf84252fc" FOREIGN KEY ("organizationTeamId") REFERENCES public.organization_team(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_document
    ADD CONSTRAINT "FK_4bc83945c022a862a33629ff1e1" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.goal
    ADD CONSTRAINT "FK_4c8b4e887a994182fd6132e6400" FOREIGN KEY ("alignedKeyResultId") REFERENCES public.key_result(id);
ALTER TABLE ONLY public.key_result
    ADD CONSTRAINT "FK_4e1e975124c1d717814a4bb2ec8" FOREIGN KEY ("kpiId") REFERENCES public.goal_kpi(id);
ALTER TABLE ONLY public.activity
    ADD CONSTRAINT "FK_4e382caaf07ab0923b2e06bf918" FOREIGN KEY ("timeSlotId") REFERENCES public.time_slot(id);
ALTER TABLE ONLY public.email_sent
    ADD CONSTRAINT "FK_525f4873c6edc3d94559f88900c" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product_variant_options_product_option
    ADD CONSTRAINT "FK_526f0131260eec308a3bd2b61b6" FOREIGN KEY ("productVariantId") REFERENCES public.product_variant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.equipment_sharing_policy
    ADD CONSTRAINT "FK_5311a833ff255881454bd5b3b58" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product
    ADD CONSTRAINT "FK_53bafe3ecc25867776c07c9e666" FOREIGN KEY ("typeId") REFERENCES public.product_type(id) ON DELETE SET NULL;
ALTER TABLE ONLY public.equipment_sharing_policy
    ADD CONSTRAINT "FK_5443ca8ed830626656d8cfecef7" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.time_log
    ADD CONSTRAINT "FK_54776f6f5fd3c13c3bc1fbfac5b" FOREIGN KEY ("projectId") REFERENCES public.organization_project(id);
ALTER TABLE ONLY public.tag_income
    ADD CONSTRAINT "FK_55c9568ebe1c4addc3deb6922e5" FOREIGN KEY ("incomeId") REFERENCES public.income(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.request_approval_employee
    ADD CONSTRAINT "FK_563fec5539b89a57f40731f9858" FOREIGN KEY ("requestApprovalId") REFERENCES public.request_approval(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_vendor
    ADD CONSTRAINT "FK_56dd132aa3743cfa9b034d020eb" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee_setting
    ADD CONSTRAINT "FK_56e96cd218a185ed59b5a8e7869" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.equipment_shares_employees
    ADD CONSTRAINT "FK_57f6461f1a710f0f4abdcb8d0e6" FOREIGN KEY ("employeeId") REFERENCES public.employee(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product_category_translation
    ADD CONSTRAINT "FK_586294149d24cd835678878ef12" FOREIGN KEY ("referenceId") REFERENCES public.product_category(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.key_result
    ADD CONSTRAINT "FK_5880347716f9ec5056ec15112cc" FOREIGN KEY ("ownerId") REFERENCES public.employee(id);
ALTER TABLE ONLY public.activity
    ADD CONSTRAINT "FK_5a898f44fa31ef7916f0c38b016" FOREIGN KEY ("projectId") REFERENCES public.organization_project(id);
ALTER TABLE ONLY public.task
    ADD CONSTRAINT "FK_5b0272d923a31c972bed1a1ac4d" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.screenshot
    ADD CONSTRAINT "FK_5b594d02d98d5defcde323abe5b" FOREIGN KEY ("timeSlotId") REFERENCES public.time_slot(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee
    ADD CONSTRAINT "FK_5e719204dcafa8d6b2ecdeda130" FOREIGN KEY ("organizationPositionId") REFERENCES public.organization_position(id);
ALTER TABLE ONLY public.expense
    ADD CONSTRAINT "FK_5e7b197dbac69012dbdb4964f37" FOREIGN KEY ("employeeId") REFERENCES public.employee(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee_recurring_expense
    ADD CONSTRAINT "FK_5fde7be40b3c03bc0fdac0c2f66" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.contact
    ADD CONSTRAINT "FK_60468af1ce34043a900809c84f2" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.user_organization
    ADD CONSTRAINT "FK_611e1392c8cc9b101e3ea7ad80c" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.skill_organization
    ADD CONSTRAINT "FK_61593ade5fed9445738ddbe39c4" FOREIGN KEY ("skillId") REFERENCES public.skill(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_contact
    ADD CONSTRAINT "FK_6200736cb4d3617b004e5b647ff" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee_upwork_job_search_criterion
    ADD CONSTRAINT "FK_630337302efe97cc93deeb21516" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.time_slot_time_logs
    ADD CONSTRAINT "FK_63c61a88461ff5c115c3b6bcde5" FOREIGN KEY ("timeSlotId") REFERENCES public.time_slot(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.income
    ADD CONSTRAINT "FK_64409de4711cd14e2c43371cc02" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.pipeline
    ADD CONSTRAINT "FK_683274c59fb08b21249096e305c" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "FK_685bf353c85f23b6f848e4dcded" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee_job_preset
    ADD CONSTRAINT "FK_68e75e49f06409fd385b4f87746" FOREIGN KEY ("employeeId") REFERENCES public.employee(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product_variant
    ADD CONSTRAINT "FK_6a289b10030ae86903406e3c9bd" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_user
    ADD CONSTRAINT "FK_6a58ed56a12604c076a8e0cfdaa" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.goal
    ADD CONSTRAINT "FK_6b4758a5442713070c9a366d0e5" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_project_employee
    ADD CONSTRAINT "FK_6b5b0c3d994f59d9c800922257f" FOREIGN KEY ("employeeId") REFERENCES public.employee(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.timesheet
    ADD CONSTRAINT "FK_6c1f81934a3f597b3b1a17f5623" FOREIGN KEY ("approvedById") REFERENCES public.employee(id);
ALTER TABLE ONLY public.tag_request_approval
    ADD CONSTRAINT "FK_6c6576bff4b497a4975337fa5e3" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.request_approval_team
    ADD CONSTRAINT "FK_6c75d8a8c609e88896b2653cc41" FOREIGN KEY ("requestApprovalId") REFERENCES public.request_approval(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.expense
    ADD CONSTRAINT "FK_6d171c9d5f81095436b99da5e62" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product_variant
    ADD CONSTRAINT "FK_6e420052844edf3a5506d863ce6" FOREIGN KEY ("productId") REFERENCES public.product(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_expense
    ADD CONSTRAINT "FK_6f1108552ea7a70a4d958b338cd" FOREIGN KEY ("expenseId") REFERENCES public.expense(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.integration_entity_setting_tied_entity
    ADD CONSTRAINT "FK_6f48a21f83b1c03f3b92c4eeafc" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.integration_map
    ADD CONSTRAINT "FK_7022dafd72c1b92f7d506914411" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product_variant_price
    ADD CONSTRAINT "FK_7052eaf00a5795afa5ebf359950" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.user_organization
    ADD CONSTRAINT "FK_7143f31467178a6164a42426c15" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_organization_expense_category
    ADD CONSTRAINT "FK_727dbf5e1100023681e216d6a93" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.pipeline_stage
    ADD CONSTRAINT "FK_73ec3158bf224b485fd715cb3a6" FOREIGN KEY ("pipelineId") REFERENCES public.pipeline(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization
    ADD CONSTRAINT "FK_745a293c8b2c750bc421fa06332" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_request_approval
    ADD CONSTRAINT "FK_74938a30181630c480b36e27d76" FOREIGN KEY ("requestApprovalId") REFERENCES public.request_approval(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.key_result_update
    ADD CONSTRAINT "FK_7497a70a581e5f56f792015dd37" FOREIGN KEY ("keyResultId") REFERENCES public.key_result(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.email_template
    ADD CONSTRAINT "FK_753e005a45556b5909e11937aaf" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.skill_employee
    ADD CONSTRAINT "FK_760034f54e598d519b5f0c4ecee" FOREIGN KEY ("employeeId") REFERENCES public.employee(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.contact
    ADD CONSTRAINT "FK_7719d73cd16a9f57ecc6ac24b3d" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.request_approval_team
    ADD CONSTRAINT "FK_77e1050669b32cfff482f960169" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.task_employee
    ADD CONSTRAINT "FK_790858593698e54cba501eb6908" FOREIGN KEY ("taskId") REFERENCES public.task(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.time_slot
    ADD CONSTRAINT "FK_7913305b850c7afc89b6ed96a30" FOREIGN KEY ("employeeId") REFERENCES public.employee(id);
ALTER TABLE ONLY public.organization
    ADD CONSTRAINT "FK_7965db2b12872551b586f76dd79" FOREIGN KEY ("contactId") REFERENCES public.contact(id);
ALTER TABLE ONLY public.employee_job_preset
    ADD CONSTRAINT "FK_7ae5b4d4bdec77971dab319f2e2" FOREIGN KEY ("jobPresetId") REFERENCES public.job_preset(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_organization_employee_level
    ADD CONSTRAINT "FK_7b74c481eb00ffa33efeae7fbd0" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_organization
    ADD CONSTRAINT "FK_7ca79ff010025397cf9f216bdeb" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.equipment_shares_teams
    ADD CONSTRAINT "FK_7ccef49dd56c8c74daa8d12186b" FOREIGN KEY ("organizationTeamId") REFERENCES public.organization_team(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_project
    ADD CONSTRAINT "FK_7cf84e8b5775f349f81a1f3cc44" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_organization_vendor
    ADD CONSTRAINT "FK_7dde3307daf6d6dec1513ecc560" FOREIGN KEY ("organizationVendorId") REFERENCES public.organization_vendor(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_vendor
    ADD CONSTRAINT "FK_7e0bf6063e1728c9813d5da7caa" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.job_preset
    ADD CONSTRAINT "FK_7e53ea80aca15da11a8a5ec0380" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.knowledge_base_author
    ADD CONSTRAINT "FK_81558bb2bef673628d92540b4e4" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.time_slot_minute
    ADD CONSTRAINT "FK_82c5edbd179359212f16f0d386a" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.request_approval
    ADD CONSTRAINT "FK_8343741e7929043b2a7de89f739" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_employee_level
    ADD CONSTRAINT "FK_847e4d7a8a918a2e471c78456ca" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product_category
    ADD CONSTRAINT "FK_853302351eaa4daa39920c270a9" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.income
    ADD CONSTRAINT "FK_8608b275644cfc7a0f3f5850814" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.job_search_category
    ADD CONSTRAINT "FK_86381fb6d28978b101b3aec8ca4" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.equipment_shares_employees
    ADD CONSTRAINT "FK_8676224f55a965c53e4bb7cbf8f" FOREIGN KEY ("equipmentSharingId") REFERENCES public.equipment_sharing(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee_appointment
    ADD CONSTRAINT "FK_86cf36c137712e779dd7e2301e6" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.pipeline
    ADD CONSTRAINT "FK_873ade98fbd6ca71c8b4d1bbcac" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_organization_contact
    ADD CONSTRAINT "FK_8a06f5aded97d1b5e81005e1216" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_recurring_expense
    ADD CONSTRAINT "FK_8a12e7a0d47d3c6a6b35f7984e3" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_sprint
    ADD CONSTRAINT "FK_8a1fe8afb3aa672bae5993fbe7d" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.key_result
    ADD CONSTRAINT "FK_8ac2c6b487d03157adda874789f" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.timesheet
    ADD CONSTRAINT "FK_8c8f821cb0fe0dd387491ea7d9e" FOREIGN KEY ("employeeId") REFERENCES public.employee(id);
ALTER TABLE ONLY public.organization_team_employee
    ADD CONSTRAINT "FK_8dc83cdd7c519d73afc0d8bdf09" FOREIGN KEY ("organizationTeamId") REFERENCES public.organization_team(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_expense
    ADD CONSTRAINT "FK_8dcfbd0d960672fefe681bcba9c" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.integration_integration_type
    ADD CONSTRAINT "FK_8dd2062499a6c2a708ddd05650e" FOREIGN KEY ("integrationTypeId") REFERENCES public.integration_type(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.skill
    ADD CONSTRAINT "FK_8e502eac7ed1347c71c26beae81" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.email_sent
    ADD CONSTRAINT "FK_9033faf41b23c61ba201c487969" FOREIGN KEY ("emailTemplateId") REFERENCES public.email_template(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_organization_employment_type
    ADD CONSTRAINT "FK_904a731b2ae6bc1aa52c8302a98" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product_variant
    ADD CONSTRAINT "FK_9121e00c4dc3500dc610cf8722e" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee_award
    ADD CONSTRAINT "FK_91e0f7efcd17d20b5029fb1342d" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.deal
    ADD CONSTRAINT "FK_9211f5b62988df6e95522be7daa" FOREIGN KEY ("stageId") REFERENCES public.pipeline_stage(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.time_slot_minute
    ADD CONSTRAINT "FK_9272701d3da8bd8507f316c9154" FOREIGN KEY ("timeSlotId") REFERENCES public.time_slot(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.event_type
    ADD CONSTRAINT "FK_92fc62260c0c7ff108622850bff" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.request_approval_team
    ADD CONSTRAINT "FK_94b2a3d0f17c9549dea1493dc96" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.task
    ADD CONSTRAINT "FK_94fe6b3a5aec5f85427df4f8cd7" FOREIGN KEY ("creatorId") REFERENCES public."user"(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee_setting
    ADD CONSTRAINT "FK_9516a627a131626d2a5738a05a8" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.integration_setting
    ADD CONSTRAINT "FK_954c6b05297814776d9cb66ca77" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee_setting
    ADD CONSTRAINT "FK_95ea18af6ef8123503d332240c2" FOREIGN KEY ("employeeId") REFERENCES public.employee(id);
ALTER TABLE ONLY public.time_off_request
    ADD CONSTRAINT "FK_981333982a6df8b815957dcbf27" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product_option
    ADD CONSTRAINT "FK_985d235aa5394937c4493262c7f" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.job_preset_upwork_job_search_criterion
    ADD CONSTRAINT "FK_9a687ce1a10a3abda460922cf84" FOREIGN KEY ("jobPresetId") REFERENCES public.job_preset(id);
ALTER TABLE ONLY public.expense_category
    ADD CONSTRAINT "FK_9c9bfe5baaf83f53533ff035fc0" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.request_approval_team
    ADD CONSTRAINT "FK_9ccdaee6c5c62cda8f7375e8417" FOREIGN KEY ("teamId") REFERENCES public.organization_team(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_project
    ADD CONSTRAINT "FK_9d8afc1e1e64d4b7d48dd2229d7" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.request_approval
    ADD CONSTRAINT "FK_9feaa23ed7bc47d51315e304bb5" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_position
    ADD CONSTRAINT "FK_a0409e39f23ff6d418f2c03df58" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.income
    ADD CONSTRAINT "FK_a05d52b7ffe89140f9cbcf114b3" FOREIGN KEY ("employeeId") REFERENCES public.employee(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_sprint
    ADD CONSTRAINT "FK_a140b7e30ff3455551a0fd599fb" FOREIGN KEY ("projectId") REFERENCES public.organization_project(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_team_employee
    ADD CONSTRAINT "FK_a2a5601d799fbfc29c17b99243f" FOREIGN KEY ("employeeId") REFERENCES public.employee(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee_appointment
    ADD CONSTRAINT "FK_a35637bb659c59e18adb4f38f87" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.job_preset
    ADD CONSTRAINT "FK_a4b038417e3221c0791dd8c7714" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.request_approval_employee
    ADD CONSTRAINT "FK_a5445b38b780b29b09369e36a9b" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_employment_type
    ADD CONSTRAINT "FK_a583cfe32f492f5ba99b7bb2050" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.activity
    ADD CONSTRAINT "FK_a6f74ae99d549932391f0f44609" FOREIGN KEY ("employeeId") REFERENCES public.employee(id);
ALTER TABLE ONLY public.organization_contact
    ADD CONSTRAINT "FK_a86d2e378b953cb39261f457d26" FOREIGN KEY ("contactId") REFERENCES public.contact(id);
ALTER TABLE ONLY public.time_log
    ADD CONSTRAINT "FK_a89a849957e005bafb8e4220bc7" FOREIGN KEY ("employeeId") REFERENCES public.employee(id);
ALTER TABLE ONLY public.organization_position
    ADD CONSTRAINT "FK_a8f497b1006ec967964abb0d497" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.goal
    ADD CONSTRAINT "FK_ac161c1a0c0ff8e83554f097e5e" FOREIGN KEY ("ownerTeamId") REFERENCES public.organization_team(id);
ALTER TABLE ONLY public.timesheet
    ADD CONSTRAINT "FK_aca65a79fe0c1ec9e6a59022c54" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.equipment_sharing
    ADD CONSTRAINT "FK_acad51a6362806fc499e583e402" FOREIGN KEY ("equipmentId") REFERENCES public.equipment(id);
ALTER TABLE ONLY public.time_log
    ADD CONSTRAINT "FK_aed2d5cc5680fba9d387c7f931d" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.goal
    ADD CONSTRAINT "FK_af0a11734e70412b742ac339c88" FOREIGN KEY ("leadId") REFERENCES public.employee(id);
ALTER TABLE ONLY public.organization_award
    ADD CONSTRAINT "FK_af6423760433da72002a7f369eb" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee_upwork_job_search_criterion
    ADD CONSTRAINT "FK_afe6c40d3d9951388fa05f83f28" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tenant_setting
    ADD CONSTRAINT "FK_affdab301e348b892175f30fa39" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag
    ADD CONSTRAINT "FK_b08dd29fb6a8acdf83c83d8988f" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_employee
    ADD CONSTRAINT "FK_b1ffe2a63a48b486e18dc59d1b7" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.skill
    ADD CONSTRAINT "FK_b2923d394f3636671ff9b3c3e81" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_department
    ADD CONSTRAINT "FK_b3644ff7cd65239e29d292a41d1" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.time_slot
    ADD CONSTRAINT "FK_b407841271245501dd1a8c75513" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.skill_organization
    ADD CONSTRAINT "FK_b65cfda00c52e1fc26cc96e52ca" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_organization_project
    ADD CONSTRAINT "FK_b69fa5d1b1d02cdbe301ea6b108" FOREIGN KEY ("organizationProjectId") REFERENCES public.organization_project(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee_upwork_job_search_criterion
    ADD CONSTRAINT "FK_b6bcd5ceb60e4bb493344a6b4f2" FOREIGN KEY ("occupationId") REFERENCES public.job_search_occupation(id);
ALTER TABLE ONLY public.time_slot
    ADD CONSTRAINT "FK_b8284109257b5137256b5b3e848" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.job_preset_upwork_job_search_criterion
    ADD CONSTRAINT "FK_b909a3df761d7e489aca80f138a" FOREIGN KEY ("categoryId") REFERENCES public.job_search_category(id);
ALTER TABLE ONLY public.tag_equipment
    ADD CONSTRAINT "FK_bb0062d51a75164fcb64041ee7d" FOREIGN KEY ("equipmentId") REFERENCES public.equipment(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_organization_employee_level
    ADD CONSTRAINT "FK_bc18d23a1a53d4bba0b179b1522" FOREIGN KEY ("organizationEmployeeLevelId") REFERENCES public.organization_employee_level(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_project
    ADD CONSTRAINT "FK_bc1e32c13683dbb16ada1c6da14" FOREIGN KEY ("organizationContactId") REFERENCES public.organization_contact(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.knowledge_base
    ADD CONSTRAINT "FK_bcb30c9893f4c8d0c4e556b4ed3" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product_variant_setting
    ADD CONSTRAINT "FK_bed9d45e15866d9b8e87e7a7bfe" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_contact_employee
    ADD CONSTRAINT "FK_beffeb7f338fa98354948c07894" FOREIGN KEY ("organizationContactId") REFERENCES public.organization_contact(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_task
    ADD CONSTRAINT "FK_bf7c34187a346f499e4dbc4b08b" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.email_template
    ADD CONSTRAINT "FK_c160fe6234675fac031aa3e7c50" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.time_off_request
    ADD CONSTRAINT "FK_c1f8ae47dc2f1882afc5045c739" FOREIGN KEY ("policyId") REFERENCES public.time_off_policy(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.time_off_policy
    ADD CONSTRAINT "FK_c2744cffeca55c3c9c52bb9789c" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "FK_c28e52f758e7bbc53828db92194" FOREIGN KEY ("roleId") REFERENCES public.role(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_organization_department
    ADD CONSTRAINT "FK_c2c9cd2ea533d5442de455fb3e1" FOREIGN KEY ("organizationDepartmentId") REFERENCES public.organization_department(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag
    ADD CONSTRAINT "FK_c2f6bec0b39eaa3a6d90903ae99" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.integration_map
    ADD CONSTRAINT "FK_c327ea26bda3d349a1eceb5658e" FOREIGN KEY ("integrationId") REFERENCES public.integration_tenant(id);
ALTER TABLE ONLY public.organization_department_employee
    ADD CONSTRAINT "FK_c34e79a3aa682bbd3f0e8cf4c46" FOREIGN KEY ("organizationDepartmentId") REFERENCES public.organization_department(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.time_off_policy_employee
    ADD CONSTRAINT "FK_c451f53f5a6cd97db94e1c9482d" FOREIGN KEY ("employeeId") REFERENCES public.employee(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.expense
    ADD CONSTRAINT "FK_c5fb146726ff128e600f23d0a1b" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_department
    ADD CONSTRAINT "FK_c61a562a2379d1c0077fe7de332" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee
    ADD CONSTRAINT "FK_c6a48286f3aa8ae903bee0d1e72" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.integration_entity_setting
    ADD CONSTRAINT "FK_c6c01e38eebd8b26b9214b90441" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.goal
    ADD CONSTRAINT "FK_c6e8ae55a4db3584686cbf6afe1" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_organization_position
    ADD CONSTRAINT "FK_c71c381e77b0543ed4023aeef79" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.time_slot_minute
    ADD CONSTRAINT "FK_c7f72cb68b22b8ab988158e4d26" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee_upwork_job_search_criterion
    ADD CONSTRAINT "FK_c872e6e3ab28e813c2324d1f4fb" FOREIGN KEY ("employeeId") REFERENCES public.employee(id);
ALTER TABLE ONLY public.key_result
    ADD CONSTRAINT "FK_c89adeff0de3aedb2e772a5bf4c" FOREIGN KEY ("leadId") REFERENCES public.employee(id);
ALTER TABLE ONLY public.tag_integration
    ADD CONSTRAINT "FK_c9a85b16615bc5c3035802adb04" FOREIGN KEY ("integrationId") REFERENCES public.integration(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee_award
    ADD CONSTRAINT "FK_caf8363b0ed7d5f24ae866ba3bb" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.role_permission
    ADD CONSTRAINT "FK_cbd053921056e77c0a8e03122af" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_contact_employee
    ADD CONSTRAINT "FK_cd2bd8302bfb6093d0908c36dcb" FOREIGN KEY ("employeeId") REFERENCES public.employee(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.time_off_request_employee
    ADD CONSTRAINT "FK_cd312469204347b1210397770a1" FOREIGN KEY ("employeeId") REFERENCES public.employee(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.key_result_update
    ADD CONSTRAINT "FK_cd9cbc0d5b6d62dbb63c3b3a65b" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.request_approval_employee
    ADD CONSTRAINT "FK_ce2113039f070b3f003aa0db611" FOREIGN KEY ("employeeId") REFERENCES public.employee(id);
ALTER TABLE ONLY public.organization_team_employee
    ADD CONSTRAINT "FK_ce83034f38496f5fe3f19796977" FOREIGN KEY ("roleId") REFERENCES public.role(id);
ALTER TABLE ONLY public.time_log
    ADD CONSTRAINT "FK_d1e8f22c02c5e949453dde7f2d1" FOREIGN KEY ("organizationContactId") REFERENCES public.organization_contact(id);
ALTER TABLE ONLY public.key_result
    ADD CONSTRAINT "FK_d1f45ca98f17bd84a5e430feaf4" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee_upwork_job_search_criterion
    ADD CONSTRAINT "FK_d2b148ddd67e520fb8061f4c133" FOREIGN KEY ("categoryId") REFERENCES public.job_search_category(id);
ALTER TABLE ONLY public.job_preset_upwork_job_search_criterion
    ADD CONSTRAINT "FK_d45b36b85ffbd5189f7e70f29f5" FOREIGN KEY ("occupationId") REFERENCES public.job_search_occupation(id);
ALTER TABLE ONLY public.goal_kpi
    ADD CONSTRAINT "FK_d4f093ca4eb7c40db68d9a789d0" FOREIGN KEY ("leadId") REFERENCES public.employee(id);
ALTER TABLE ONLY public.availability_slot
    ADD CONSTRAINT "FK_d544bd3a63634a4438509ac958d" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.proposal
    ADD CONSTRAINT "FK_d59ec6899d435f430799795ad7b" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.job_preset_upwork_job_search_criterion
    ADD CONSTRAINT "FK_d5ca48cfacfb516543d6507ca4a" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.key_result
    ADD CONSTRAINT "FK_d8547e21ccb8e37ac9f0d69c1af" FOREIGN KEY ("taskId") REFERENCES public.task(id);
ALTER TABLE ONLY public.organization_team_employee
    ADD CONSTRAINT "FK_d8eba1c0e500c60be1b69c1e777" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_employee_level
    ADD CONSTRAINT "FK_dcc3921143cc59ff192ac8bfd53" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.approval_policy
    ADD CONSTRAINT "FK_dfe3b357df3ce136917b1f09843" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_employee
    ADD CONSTRAINT "FK_e0ddfccfe9816681c410ebf2b9a" FOREIGN KEY ("employeeId") REFERENCES public.employee(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.role_permission
    ADD CONSTRAINT "FK_e3130a39c1e4a740d044e685730" FOREIGN KEY ("roleId") REFERENCES public.role(id);
ALTER TABLE ONLY public.product_category_translation
    ADD CONSTRAINT "FK_e46203bf1dbf3291d174f02cb34" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.goal_kpi
    ADD CONSTRAINT "FK_e49e37fe88a2725a38a3b058493" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product_type
    ADD CONSTRAINT "FK_e4e4120b0c19d3a207ce38d7581" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_product
    ADD CONSTRAINT "FK_e516b4a2a1a8d4beda7217eeac6" FOREIGN KEY ("productId") REFERENCES public.product(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_user
    ADD CONSTRAINT "FK_e64a306f3215dbb99bbb26ca599" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.time_log
    ADD CONSTRAINT "FK_e65393bb52aa8275b1392c73f72" FOREIGN KEY ("timesheetId") REFERENCES public.timesheet(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_contact
    ADD CONSTRAINT "FK_e68c43e315ad3aaea4e99cf461d" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.skill_employee
    ADD CONSTRAINT "FK_e699b50ca468e75bbd36913dccb" FOREIGN KEY ("skillId") REFERENCES public.skill(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.task
    ADD CONSTRAINT "FK_e91cbff3d206f150ccc14d0c3a1" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product_variant_options_product_option
    ADD CONSTRAINT "FK_e96a71affe63c97f7fa2f076dac" FOREIGN KEY ("productOptionId") REFERENCES public.product_option(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.appointment_employee
    ADD CONSTRAINT "FK_e9ca170a0fae05e44a9bd137d8b" FOREIGN KEY ("employeeAppointmentId") REFERENCES public.employee_appointment(id) ON DELETE SET NULL;
ALTER TABLE ONLY public.equipment_sharing
    ADD CONSTRAINT "FK_ea9254be07ae4a8604f0aaab196" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.expense
    ADD CONSTRAINT "FK_eacb116ab0521ad9b96f2bb53ba" FOREIGN KEY ("vendorId") REFERENCES public.organization_vendor(id);
ALTER TABLE ONLY public.integration_map
    ADD CONSTRAINT "FK_eec3d6064578610ddc609dd360e" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product_variant
    ADD CONSTRAINT "FK_eed35a0675d80fcbfaf329f5277" FOREIGN KEY ("settingsId") REFERENCES public.product_variant_setting(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_team
    ADD CONSTRAINT "FK_eef1c19a0cb5321223cfe3286c4" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.availability_slot
    ADD CONSTRAINT "FK_f008a481cb4eed547704bb9d839" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product_type
    ADD CONSTRAINT "FK_f206c807fc7e41fc8a8b6679ae0" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.activity
    ADD CONSTRAINT "FK_f2401d8fdff5d8970dfe30d3aed" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.task_employee
    ADD CONSTRAINT "FK_f38b1bd46f8831704348003bbff" FOREIGN KEY ("employeeId") REFERENCES public.employee(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.proposal
    ADD CONSTRAINT "FK_f399488a0f3ea10bb511e3f5aa3" FOREIGN KEY ("employeeId") REFERENCES public.employee(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.employee
    ADD CONSTRAINT "FK_f4b0d329c4a3cf79ffe9d565047" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product_type_translation
    ADD CONSTRAINT "FK_f4b767c43b4e9130c63382c9b28" FOREIGN KEY ("referenceId") REFERENCES public.product_type(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_sprint
    ADD CONSTRAINT "FK_f57ad03c4e471bd8530494ea63d" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_organization
    ADD CONSTRAINT "FK_f5e70849adc6f2f81fcbccae77c" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_organization_vendor
    ADD CONSTRAINT "FK_f71369c1cb86ae9fd4d5452f9aa" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.tag_product
    ADD CONSTRAINT "FK_f75a28915b38d926902c0f85b24" FOREIGN KEY ("tagId") REFERENCES public.tag(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.integration_entity_setting
    ADD CONSTRAINT "FK_f80ff4ebbf0b33a67dce5989117" FOREIGN KEY ("integrationId") REFERENCES public.integration_tenant(id);
ALTER TABLE ONLY public.equipment_shares_teams
    ADD CONSTRAINT "FK_f84171695b7aedfc454483bcf21" FOREIGN KEY ("equipmentSharingId") REFERENCES public.equipment_sharing(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.equipment
    ADD CONSTRAINT "FK_f98ce0d210aa9f91b729d447806" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.equipment_sharing
    ADD CONSTRAINT "FK_fa525e61fb3d8d9efec0f364a4b" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.time_log
    ADD CONSTRAINT "FK_fa9018cb248ea0f3b2b30ef143b" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.equipment
    ADD CONSTRAINT "FK_fb6808468066849ab7b7454d5f3" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.event_type
    ADD CONSTRAINT "FK_fc8818d6fde74370ec703a01352" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.key_result_update
    ADD CONSTRAINT "FK_fd4b0cb7a44ed914acdda55e29c" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.activity
    ADD CONSTRAINT "FK_fdb3f018c2bba4885bfa5757d16" FOREIGN KEY ("organizationId") REFERENCES public.organization(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.organization_team_employee
    ADD CONSTRAINT "FK_fe12e1b76bbb76209134d9bdc2e" FOREIGN KEY ("tenantId") REFERENCES public.tenant(id) ON DELETE CASCADE;
ALTER TABLE ONLY public.product
    ADD CONSTRAINT "FK_ff0c0301a95e517153df97f6812" FOREIGN KEY ("categoryId") REFERENCES public.product_category(id) ON DELETE SET NULL;
ALTER TABLE ONLY public.knowledge_base
    ADD CONSTRAINT "FK_ff979040ce93cbc60863d322ecd" FOREIGN KEY ("parentId") REFERENCES public.knowledge_base(id);
