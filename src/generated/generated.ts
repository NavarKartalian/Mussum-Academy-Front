import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type AddContentsToLessonInput = {
  /** The id of the record. */
  id: Scalars['ID']
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>
}

export type AddDisciplinesToStudentInput = {
  /** The id of the record. */
  id: Scalars['ID']
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>
}

export type AddStudentsToDisciplineInput = {
  /** The id of the record. */
  id: Scalars['ID']
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>
}

export type Content = {
  __typename?: 'Content'
  createdAt: Scalars['DateTime']
  deletedAt: Scalars['DateTime']
  description?: Maybe<Scalars['String']>
  id: Scalars['String']
  lesson: Lesson
  linkContent?: Maybe<Scalars['String']>
  updatedAt: Scalars['DateTime']
}

export type ContentAggregateGroupBy = {
  __typename?: 'ContentAggregateGroupBy'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  linkContent?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ContentConnection = {
  __typename?: 'ContentConnection'
  /** Array of nodes. */
  nodes: Array<Content>
  /** Paging information */
  pageInfo: OffsetPageInfo
  /** Fetch total count of records */
  totalCount: Scalars['Int']
}

export type ContentCountAggregate = {
  __typename?: 'ContentCountAggregate'
  createdAt?: Maybe<Scalars['Int']>
  deletedAt?: Maybe<Scalars['Int']>
  description?: Maybe<Scalars['Int']>
  linkContent?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['Int']>
}

export type ContentDeleteFilter = {
  and?: InputMaybe<Array<ContentDeleteFilter>>
  createdAt?: InputMaybe<DateFieldComparison>
  deletedAt?: InputMaybe<DateFieldComparison>
  description?: InputMaybe<StringFieldComparison>
  linkContent?: InputMaybe<StringFieldComparison>
  or?: InputMaybe<Array<ContentDeleteFilter>>
  updatedAt?: InputMaybe<DateFieldComparison>
}

export type ContentDeleteResponse = {
  __typename?: 'ContentDeleteResponse'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  linkContent?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ContentFilter = {
  and?: InputMaybe<Array<ContentFilter>>
  createdAt?: InputMaybe<DateFieldComparison>
  deletedAt?: InputMaybe<DateFieldComparison>
  description?: InputMaybe<StringFieldComparison>
  lesson?: InputMaybe<ContentFilterLessonFilter>
  linkContent?: InputMaybe<StringFieldComparison>
  or?: InputMaybe<Array<ContentFilter>>
  updatedAt?: InputMaybe<DateFieldComparison>
}

export type ContentFilterLessonFilter = {
  and?: InputMaybe<Array<ContentFilterLessonFilter>>
  createdAt?: InputMaybe<DateFieldComparison>
  deletedAt?: InputMaybe<DateFieldComparison>
  description?: InputMaybe<StringFieldComparison>
  or?: InputMaybe<Array<ContentFilterLessonFilter>>
  updatedAt?: InputMaybe<DateFieldComparison>
}

export type ContentMaxAggregate = {
  __typename?: 'ContentMaxAggregate'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  linkContent?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ContentMinAggregate = {
  __typename?: 'ContentMinAggregate'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  linkContent?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ContentSort = {
  direction: SortDirection
  field: ContentSortFields
  nulls?: InputMaybe<SortNulls>
}

export enum ContentSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  LinkContent = 'linkContent',
  UpdatedAt = 'updatedAt',
}

export type ContentUpdateFilter = {
  and?: InputMaybe<Array<ContentUpdateFilter>>
  createdAt?: InputMaybe<DateFieldComparison>
  deletedAt?: InputMaybe<DateFieldComparison>
  description?: InputMaybe<StringFieldComparison>
  linkContent?: InputMaybe<StringFieldComparison>
  or?: InputMaybe<Array<ContentUpdateFilter>>
  updatedAt?: InputMaybe<DateFieldComparison>
}

export type CreateContentInput = {
  description: Scalars['String']
  lessonId?: InputMaybe<Scalars['String']>
  linkContent?: InputMaybe<Scalars['String']>
}

export type CreateDisciplineInput = {
  name: Scalars['String']
}

export type CreateLessonInput = {
  description: Scalars['String']
}

export type CreateManyContentsInput = {
  /** Array of records to create */
  contents: Array<CreateContentInput>
}

export type CreateManyDisciplinesInput = {
  /** Array of records to create */
  disciplines: Array<CreateDisciplineInput>
}

export type CreateManyLessonsInput = {
  /** Array of records to create */
  lessons: Array<CreateLessonInput>
}

export type CreateManyStudentsInput = {
  /** Array of records to create */
  students: Array<CreateStudentInput>
}

export type CreateOneContentInput = {
  /** The record to create */
  content: CreateContentInput
}

export type CreateOneDisciplineInput = {
  /** The record to create */
  discipline: CreateDisciplineInput
}

export type CreateOneLessonInput = {
  /** The record to create */
  lesson: CreateLessonInput
}

export type CreateOneStudentInput = {
  /** The record to create */
  student: CreateStudentInput
}

export type CreateStudentInput = {
  key: Scalars['String']
  name: Scalars['String']
}

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>
  eq?: InputMaybe<Scalars['DateTime']>
  gt?: InputMaybe<Scalars['DateTime']>
  gte?: InputMaybe<Scalars['DateTime']>
  in?: InputMaybe<Array<Scalars['DateTime']>>
  is?: InputMaybe<Scalars['Boolean']>
  isNot?: InputMaybe<Scalars['Boolean']>
  lt?: InputMaybe<Scalars['DateTime']>
  lte?: InputMaybe<Scalars['DateTime']>
  neq?: InputMaybe<Scalars['DateTime']>
  notBetween?: InputMaybe<DateFieldComparisonBetween>
  notIn?: InputMaybe<Array<Scalars['DateTime']>>
}

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime']
  upper: Scalars['DateTime']
}

export type DeleteManyContentsInput = {
  /** Filter to find records to delete */
  filter: ContentDeleteFilter
}

export type DeleteManyDisciplinesInput = {
  /** Filter to find records to delete */
  filter: DisciplineDeleteFilter
}

export type DeleteManyLessonsInput = {
  /** Filter to find records to delete */
  filter: LessonDeleteFilter
}

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse'
  /** The number of records deleted. */
  deletedCount: Scalars['Int']
}

export type DeleteManyStudentsInput = {
  /** Filter to find records to delete */
  filter: StudentDeleteFilter
}

export type DeleteOneContentInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']
}

export type DeleteOneDisciplineInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']
}

export type DeleteOneLessonInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']
}

export type DeleteOneStudentInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']
}

export type Discipline = {
  __typename?: 'Discipline'
  createdAt: Scalars['DateTime']
  deletedAt: Scalars['DateTime']
  id: Scalars['String']
  name: Scalars['String']
  students?: Maybe<DisciplineStudentsConnection>
  updatedAt: Scalars['DateTime']
}

export type DisciplineStudentsArgs = {
  filter?: InputMaybe<StudentFilter>
  paging?: InputMaybe<OffsetPaging>
  sorting?: InputMaybe<Array<StudentSort>>
}

export type DisciplineAggregateGroupBy = {
  __typename?: 'DisciplineAggregateGroupBy'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type DisciplineConnection = {
  __typename?: 'DisciplineConnection'
  /** Array of nodes. */
  nodes: Array<Discipline>
  /** Paging information */
  pageInfo: OffsetPageInfo
  /** Fetch total count of records */
  totalCount: Scalars['Int']
}

export type DisciplineCountAggregate = {
  __typename?: 'DisciplineCountAggregate'
  createdAt?: Maybe<Scalars['Int']>
  deletedAt?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['Int']>
}

export type DisciplineDeleteFilter = {
  and?: InputMaybe<Array<DisciplineDeleteFilter>>
  createdAt?: InputMaybe<DateFieldComparison>
  deletedAt?: InputMaybe<DateFieldComparison>
  name?: InputMaybe<StringFieldComparison>
  or?: InputMaybe<Array<DisciplineDeleteFilter>>
  updatedAt?: InputMaybe<DateFieldComparison>
}

export type DisciplineDeleteResponse = {
  __typename?: 'DisciplineDeleteResponse'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type DisciplineFilter = {
  and?: InputMaybe<Array<DisciplineFilter>>
  createdAt?: InputMaybe<DateFieldComparison>
  deletedAt?: InputMaybe<DateFieldComparison>
  name?: InputMaybe<StringFieldComparison>
  or?: InputMaybe<Array<DisciplineFilter>>
  students?: InputMaybe<DisciplineFilterStudentFilter>
  updatedAt?: InputMaybe<DateFieldComparison>
}

export type DisciplineFilterStudentFilter = {
  and?: InputMaybe<Array<DisciplineFilterStudentFilter>>
  createdAt?: InputMaybe<DateFieldComparison>
  deletedAt?: InputMaybe<DateFieldComparison>
  key?: InputMaybe<StringFieldComparison>
  name?: InputMaybe<StringFieldComparison>
  or?: InputMaybe<Array<DisciplineFilterStudentFilter>>
  updatedAt?: InputMaybe<DateFieldComparison>
}

export type DisciplineMaxAggregate = {
  __typename?: 'DisciplineMaxAggregate'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type DisciplineMinAggregate = {
  __typename?: 'DisciplineMinAggregate'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type DisciplineSort = {
  direction: SortDirection
  field: DisciplineSortFields
  nulls?: InputMaybe<SortNulls>
}

export enum DisciplineSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export type DisciplineStudentsConnection = {
  __typename?: 'DisciplineStudentsConnection'
  /** Array of nodes. */
  nodes: Array<Student>
  /** Paging information */
  pageInfo: OffsetPageInfo
  /** Fetch total count of records */
  totalCount: Scalars['Int']
}

export type DisciplineUpdateFilter = {
  and?: InputMaybe<Array<DisciplineUpdateFilter>>
  createdAt?: InputMaybe<DateFieldComparison>
  deletedAt?: InputMaybe<DateFieldComparison>
  name?: InputMaybe<StringFieldComparison>
  or?: InputMaybe<Array<DisciplineUpdateFilter>>
  updatedAt?: InputMaybe<DateFieldComparison>
}

export type Lesson = {
  __typename?: 'Lesson'
  contents?: Maybe<LessonContentsConnection>
  createdAt: Scalars['DateTime']
  deletedAt: Scalars['DateTime']
  description: Scalars['String']
  id: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type LessonContentsArgs = {
  filter?: InputMaybe<ContentFilter>
  paging?: InputMaybe<OffsetPaging>
  sorting?: InputMaybe<Array<ContentSort>>
}

export type LessonAggregateGroupBy = {
  __typename?: 'LessonAggregateGroupBy'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type LessonConnection = {
  __typename?: 'LessonConnection'
  /** Array of nodes. */
  nodes: Array<Lesson>
  /** Paging information */
  pageInfo: OffsetPageInfo
  /** Fetch total count of records */
  totalCount: Scalars['Int']
}

export type LessonContentsConnection = {
  __typename?: 'LessonContentsConnection'
  /** Array of nodes. */
  nodes: Array<Content>
  /** Paging information */
  pageInfo: OffsetPageInfo
  /** Fetch total count of records */
  totalCount: Scalars['Int']
}

export type LessonCountAggregate = {
  __typename?: 'LessonCountAggregate'
  createdAt?: Maybe<Scalars['Int']>
  deletedAt?: Maybe<Scalars['Int']>
  description?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['Int']>
}

export type LessonDeleteFilter = {
  and?: InputMaybe<Array<LessonDeleteFilter>>
  createdAt?: InputMaybe<DateFieldComparison>
  deletedAt?: InputMaybe<DateFieldComparison>
  description?: InputMaybe<StringFieldComparison>
  or?: InputMaybe<Array<LessonDeleteFilter>>
  updatedAt?: InputMaybe<DateFieldComparison>
}

export type LessonDeleteResponse = {
  __typename?: 'LessonDeleteResponse'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type LessonFilter = {
  and?: InputMaybe<Array<LessonFilter>>
  contents?: InputMaybe<LessonFilterContentFilter>
  createdAt?: InputMaybe<DateFieldComparison>
  deletedAt?: InputMaybe<DateFieldComparison>
  description?: InputMaybe<StringFieldComparison>
  or?: InputMaybe<Array<LessonFilter>>
  updatedAt?: InputMaybe<DateFieldComparison>
}

export type LessonFilterContentFilter = {
  and?: InputMaybe<Array<LessonFilterContentFilter>>
  createdAt?: InputMaybe<DateFieldComparison>
  deletedAt?: InputMaybe<DateFieldComparison>
  description?: InputMaybe<StringFieldComparison>
  linkContent?: InputMaybe<StringFieldComparison>
  or?: InputMaybe<Array<LessonFilterContentFilter>>
  updatedAt?: InputMaybe<DateFieldComparison>
}

export type LessonMaxAggregate = {
  __typename?: 'LessonMaxAggregate'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type LessonMinAggregate = {
  __typename?: 'LessonMinAggregate'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type LessonSort = {
  direction: SortDirection
  field: LessonSortFields
  nulls?: InputMaybe<SortNulls>
}

export enum LessonSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  UpdatedAt = 'updatedAt',
}

export type LessonUpdateFilter = {
  and?: InputMaybe<Array<LessonUpdateFilter>>
  createdAt?: InputMaybe<DateFieldComparison>
  deletedAt?: InputMaybe<DateFieldComparison>
  description?: InputMaybe<StringFieldComparison>
  or?: InputMaybe<Array<LessonUpdateFilter>>
  updatedAt?: InputMaybe<DateFieldComparison>
}

export type Mutation = {
  __typename?: 'Mutation'
  addContentsToLesson: Lesson
  addDisciplinesToStudent: Student
  addStudentsToDiscipline: Discipline
  createManyContents: Array<Content>
  createManyDisciplines: Array<Discipline>
  createManyLessons: Array<Lesson>
  createManyStudents: Array<Student>
  createOneContent: Content
  createOneDiscipline: Discipline
  createOneLesson: Lesson
  createOneStudent: Student
  deleteManyContents: DeleteManyResponse
  deleteManyDisciplines: DeleteManyResponse
  deleteManyLessons: DeleteManyResponse
  deleteManyStudents: DeleteManyResponse
  deleteOneContent: ContentDeleteResponse
  deleteOneDiscipline: DisciplineDeleteResponse
  deleteOneLesson: LessonDeleteResponse
  deleteOneStudent: StudentDeleteResponse
  removeContentsFromLesson: Lesson
  removeDisciplinesFromStudent: Student
  removeLessonFromContent: Content
  removeStudentsFromDiscipline: Discipline
  setContentsOnLesson: Lesson
  setDisciplinesOnStudent: Student
  setLessonOnContent: Content
  setStudentsOnDiscipline: Discipline
  updateManyContents: UpdateManyResponse
  updateManyDisciplines: UpdateManyResponse
  updateManyLessons: UpdateManyResponse
  updateManyStudents: UpdateManyResponse
  updateOneContent: Content
  updateOneDiscipline: Discipline
  updateOneLesson: Lesson
  updateOneStudent: Student
}

export type MutationAddContentsToLessonArgs = {
  input: AddContentsToLessonInput
}

export type MutationAddDisciplinesToStudentArgs = {
  input: AddDisciplinesToStudentInput
}

export type MutationAddStudentsToDisciplineArgs = {
  input: AddStudentsToDisciplineInput
}

export type MutationCreateManyContentsArgs = {
  input: CreateManyContentsInput
}

export type MutationCreateManyDisciplinesArgs = {
  input: CreateManyDisciplinesInput
}

export type MutationCreateManyLessonsArgs = {
  input: CreateManyLessonsInput
}

export type MutationCreateManyStudentsArgs = {
  input: CreateManyStudentsInput
}

export type MutationCreateOneContentArgs = {
  input: CreateOneContentInput
}

export type MutationCreateOneDisciplineArgs = {
  input: CreateOneDisciplineInput
}

export type MutationCreateOneLessonArgs = {
  input: CreateOneLessonInput
}

export type MutationCreateOneStudentArgs = {
  input: CreateOneStudentInput
}

export type MutationDeleteManyContentsArgs = {
  input: DeleteManyContentsInput
}

export type MutationDeleteManyDisciplinesArgs = {
  input: DeleteManyDisciplinesInput
}

export type MutationDeleteManyLessonsArgs = {
  input: DeleteManyLessonsInput
}

export type MutationDeleteManyStudentsArgs = {
  input: DeleteManyStudentsInput
}

export type MutationDeleteOneContentArgs = {
  input: DeleteOneContentInput
}

export type MutationDeleteOneDisciplineArgs = {
  input: DeleteOneDisciplineInput
}

export type MutationDeleteOneLessonArgs = {
  input: DeleteOneLessonInput
}

export type MutationDeleteOneStudentArgs = {
  input: DeleteOneStudentInput
}

export type MutationRemoveContentsFromLessonArgs = {
  input: RemoveContentsFromLessonInput
}

export type MutationRemoveDisciplinesFromStudentArgs = {
  input: RemoveDisciplinesFromStudentInput
}

export type MutationRemoveLessonFromContentArgs = {
  input: RemoveLessonFromContentInput
}

export type MutationRemoveStudentsFromDisciplineArgs = {
  input: RemoveStudentsFromDisciplineInput
}

export type MutationSetContentsOnLessonArgs = {
  input: SetContentsOnLessonInput
}

export type MutationSetDisciplinesOnStudentArgs = {
  input: SetDisciplinesOnStudentInput
}

export type MutationSetLessonOnContentArgs = {
  input: SetLessonOnContentInput
}

export type MutationSetStudentsOnDisciplineArgs = {
  input: SetStudentsOnDisciplineInput
}

export type MutationUpdateManyContentsArgs = {
  input: UpdateManyContentsInput
}

export type MutationUpdateManyDisciplinesArgs = {
  input: UpdateManyDisciplinesInput
}

export type MutationUpdateManyLessonsArgs = {
  input: UpdateManyLessonsInput
}

export type MutationUpdateManyStudentsArgs = {
  input: UpdateManyStudentsInput
}

export type MutationUpdateOneContentArgs = {
  input: UpdateOneContentInput
}

export type MutationUpdateOneDisciplineArgs = {
  input: UpdateOneDisciplineInput
}

export type MutationUpdateOneLessonArgs = {
  input: UpdateOneLessonInput
}

export type MutationUpdateOneStudentArgs = {
  input: UpdateOneStudentInput
}

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo'
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>
}

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']>
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']>
}

export type Query = {
  __typename?: 'Query'
  content?: Maybe<Content>
  contents: ContentConnection
  discipline?: Maybe<Discipline>
  disciplines: DisciplineConnection
  lesson?: Maybe<Lesson>
  lessons: LessonConnection
  student?: Maybe<Student>
  students: StudentConnection
}

export type QueryContentArgs = {
  id: Scalars['ID']
}

export type QueryContentsArgs = {
  filter?: InputMaybe<ContentFilter>
  paging?: InputMaybe<OffsetPaging>
  sorting?: InputMaybe<Array<ContentSort>>
}

export type QueryDisciplineArgs = {
  id: Scalars['ID']
}

export type QueryDisciplinesArgs = {
  filter?: InputMaybe<DisciplineFilter>
  paging?: InputMaybe<OffsetPaging>
  sorting?: InputMaybe<Array<DisciplineSort>>
}

export type QueryLessonArgs = {
  id: Scalars['ID']
}

export type QueryLessonsArgs = {
  filter?: InputMaybe<LessonFilter>
  paging?: InputMaybe<OffsetPaging>
  sorting?: InputMaybe<Array<LessonSort>>
}

export type QueryStudentArgs = {
  id: Scalars['ID']
}

export type QueryStudentsArgs = {
  filter?: InputMaybe<StudentFilter>
  paging?: InputMaybe<OffsetPaging>
  sorting?: InputMaybe<Array<StudentSort>>
}

export type RemoveContentsFromLessonInput = {
  /** The id of the record. */
  id: Scalars['ID']
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>
}

export type RemoveDisciplinesFromStudentInput = {
  /** The id of the record. */
  id: Scalars['ID']
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>
}

export type RemoveLessonFromContentInput = {
  /** The id of the record. */
  id: Scalars['ID']
  /** The id of relation. */
  relationId: Scalars['ID']
}

export type RemoveStudentsFromDisciplineInput = {
  /** The id of the record. */
  id: Scalars['ID']
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>
}

export type SetContentsOnLessonInput = {
  /** The id of the record. */
  id: Scalars['ID']
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>
}

export type SetDisciplinesOnStudentInput = {
  /** The id of the record. */
  id: Scalars['ID']
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>
}

export type SetLessonOnContentInput = {
  /** The id of the record. */
  id: Scalars['ID']
  /** The id of relation. */
  relationId: Scalars['ID']
}

export type SetStudentsOnDisciplineInput = {
  /** The id of the record. */
  id: Scalars['ID']
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>
}

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST',
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  iLike?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  is?: InputMaybe<Scalars['Boolean']>
  isNot?: InputMaybe<Scalars['Boolean']>
  like?: InputMaybe<Scalars['String']>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  neq?: InputMaybe<Scalars['String']>
  notILike?: InputMaybe<Scalars['String']>
  notIn?: InputMaybe<Array<Scalars['String']>>
  notLike?: InputMaybe<Scalars['String']>
}

export type Student = {
  __typename?: 'Student'
  createdAt: Scalars['DateTime']
  deletedAt: Scalars['DateTime']
  disciplines?: Maybe<StudentDisciplinesConnection>
  id: Scalars['String']
  key: Scalars['String']
  name: Scalars['String']
  updatedAt: Scalars['DateTime']
}

export type StudentDisciplinesArgs = {
  filter?: InputMaybe<DisciplineFilter>
  paging?: InputMaybe<OffsetPaging>
  sorting?: InputMaybe<Array<DisciplineSort>>
}

export type StudentAggregateGroupBy = {
  __typename?: 'StudentAggregateGroupBy'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  key?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type StudentConnection = {
  __typename?: 'StudentConnection'
  /** Array of nodes. */
  nodes: Array<Student>
  /** Paging information */
  pageInfo: OffsetPageInfo
  /** Fetch total count of records */
  totalCount: Scalars['Int']
}

export type StudentCountAggregate = {
  __typename?: 'StudentCountAggregate'
  createdAt?: Maybe<Scalars['Int']>
  deletedAt?: Maybe<Scalars['Int']>
  key?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['Int']>
}

export type StudentDeleteFilter = {
  and?: InputMaybe<Array<StudentDeleteFilter>>
  createdAt?: InputMaybe<DateFieldComparison>
  deletedAt?: InputMaybe<DateFieldComparison>
  key?: InputMaybe<StringFieldComparison>
  name?: InputMaybe<StringFieldComparison>
  or?: InputMaybe<Array<StudentDeleteFilter>>
  updatedAt?: InputMaybe<DateFieldComparison>
}

export type StudentDeleteResponse = {
  __typename?: 'StudentDeleteResponse'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  key?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type StudentDisciplinesConnection = {
  __typename?: 'StudentDisciplinesConnection'
  /** Array of nodes. */
  nodes: Array<Discipline>
  /** Paging information */
  pageInfo: OffsetPageInfo
  /** Fetch total count of records */
  totalCount: Scalars['Int']
}

export type StudentFilter = {
  and?: InputMaybe<Array<StudentFilter>>
  createdAt?: InputMaybe<DateFieldComparison>
  deletedAt?: InputMaybe<DateFieldComparison>
  disciplines?: InputMaybe<StudentFilterDisciplineFilter>
  key?: InputMaybe<StringFieldComparison>
  name?: InputMaybe<StringFieldComparison>
  or?: InputMaybe<Array<StudentFilter>>
  updatedAt?: InputMaybe<DateFieldComparison>
}

export type StudentFilterDisciplineFilter = {
  and?: InputMaybe<Array<StudentFilterDisciplineFilter>>
  createdAt?: InputMaybe<DateFieldComparison>
  deletedAt?: InputMaybe<DateFieldComparison>
  name?: InputMaybe<StringFieldComparison>
  or?: InputMaybe<Array<StudentFilterDisciplineFilter>>
  updatedAt?: InputMaybe<DateFieldComparison>
}

export type StudentMaxAggregate = {
  __typename?: 'StudentMaxAggregate'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  key?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type StudentMinAggregate = {
  __typename?: 'StudentMinAggregate'
  createdAt?: Maybe<Scalars['DateTime']>
  deletedAt?: Maybe<Scalars['DateTime']>
  key?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type StudentSort = {
  direction: SortDirection
  field: StudentSortFields
  nulls?: InputMaybe<SortNulls>
}

export enum StudentSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Key = 'key',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export type StudentUpdateFilter = {
  and?: InputMaybe<Array<StudentUpdateFilter>>
  createdAt?: InputMaybe<DateFieldComparison>
  deletedAt?: InputMaybe<DateFieldComparison>
  key?: InputMaybe<StringFieldComparison>
  name?: InputMaybe<StringFieldComparison>
  or?: InputMaybe<Array<StudentUpdateFilter>>
  updatedAt?: InputMaybe<DateFieldComparison>
}

export type UpdateContentInput = {
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  lessonId?: InputMaybe<Scalars['String']>
  linkContent?: InputMaybe<Scalars['String']>
}

export type UpdateDisciplineInput = {
  id?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
}

export type UpdateLessonInput = {
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
}

export type UpdateManyContentsInput = {
  /** Filter used to find fields to update */
  filter: ContentUpdateFilter
  /** The update to apply to all records found using the filter */
  update: UpdateContentInput
}

export type UpdateManyDisciplinesInput = {
  /** Filter used to find fields to update */
  filter: DisciplineUpdateFilter
  /** The update to apply to all records found using the filter */
  update: UpdateDisciplineInput
}

export type UpdateManyLessonsInput = {
  /** Filter used to find fields to update */
  filter: LessonUpdateFilter
  /** The update to apply to all records found using the filter */
  update: UpdateLessonInput
}

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse'
  /** The number of records updated. */
  updatedCount: Scalars['Int']
}

export type UpdateManyStudentsInput = {
  /** Filter used to find fields to update */
  filter: StudentUpdateFilter
  /** The update to apply to all records found using the filter */
  update: UpdateStudentInput
}

export type UpdateOneContentInput = {
  /** The id of the record to update */
  id: Scalars['ID']
  /** The update to apply. */
  update: UpdateContentInput
}

export type UpdateOneDisciplineInput = {
  /** The id of the record to update */
  id: Scalars['ID']
  /** The update to apply. */
  update: UpdateDisciplineInput
}

export type UpdateOneLessonInput = {
  /** The id of the record to update */
  id: Scalars['ID']
  /** The update to apply. */
  update: UpdateLessonInput
}

export type UpdateOneStudentInput = {
  /** The id of the record to update */
  id: Scalars['ID']
  /** The update to apply. */
  update: UpdateStudentInput
}

export type UpdateStudentInput = {
  id: Scalars['String']
  key?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type CreateStudentMutationVariables = Exact<{
  input: CreateOneStudentInput
}>

export type CreateStudentMutation = {
  __typename?: 'Mutation'
  createOneStudent: {
    __typename?: 'Student'
    id: string
    key: string
    name: string
  }
}

export type DeleteStudentMutationVariables = Exact<{
  input: DeleteOneStudentInput
}>

export type DeleteStudentMutation = {
  __typename?: 'Mutation'
  deleteOneStudent: {
    __typename?: 'StudentDeleteResponse'
    deletedAt?: any | null
  }
}

export type GetStudentsQueryVariables = Exact<{
  [key: string]: never
}>

export type GetStudentsQuery = {
  __typename?: 'Query'
  students: {
    __typename?: 'StudentConnection'
    totalCount: number
    nodes: Array<{
      __typename?: 'Student'
      id: string
      key: string
      name: string
    }>
  }
}

export const CreateStudentDocument = gql`
  mutation CreateStudent($input: CreateOneStudentInput!) {
    createOneStudent(input: $input) {
      id
      key
      name
    }
  }
`
export type CreateStudentMutationFn = Apollo.MutationFunction<
  CreateStudentMutation,
  CreateStudentMutationVariables
>

/**
 * __useCreateStudentMutation__
 *
 * To run a mutation, you first call `useCreateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStudentMutation, { data, loading, error }] = useCreateStudentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateStudentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateStudentMutation,
    CreateStudentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateStudentMutation,
    CreateStudentMutationVariables
  >(CreateStudentDocument, options)
}
export type CreateStudentMutationHookResult = ReturnType<
  typeof useCreateStudentMutation
>
export type CreateStudentMutationResult =
  Apollo.MutationResult<CreateStudentMutation>
export type CreateStudentMutationOptions = Apollo.BaseMutationOptions<
  CreateStudentMutation,
  CreateStudentMutationVariables
>
export const DeleteStudentDocument = gql`
  mutation DeleteStudent($input: DeleteOneStudentInput!) {
    deleteOneStudent(input: $input) {
      deletedAt
    }
  }
`
export type DeleteStudentMutationFn = Apollo.MutationFunction<
  DeleteStudentMutation,
  DeleteStudentMutationVariables
>

/**
 * __useDeleteStudentMutation__
 *
 * To run a mutation, you first call `useDeleteStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStudentMutation, { data, loading, error }] = useDeleteStudentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteStudentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteStudentMutation,
    DeleteStudentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteStudentMutation,
    DeleteStudentMutationVariables
  >(DeleteStudentDocument, options)
}
export type DeleteStudentMutationHookResult = ReturnType<
  typeof useDeleteStudentMutation
>
export type DeleteStudentMutationResult =
  Apollo.MutationResult<DeleteStudentMutation>
export type DeleteStudentMutationOptions = Apollo.BaseMutationOptions<
  DeleteStudentMutation,
  DeleteStudentMutationVariables
>
export const GetStudentsDocument = gql`
  query getStudents {
    students {
      nodes {
        id
        key
        name
      }
      totalCount
    }
  }
`

/**
 * __useGetStudentsQuery__
 *
 * To run a query within a React component, call `useGetStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStudentsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetStudentsQuery,
    GetStudentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetStudentsQuery, GetStudentsQueryVariables>(
    GetStudentsDocument,
    options,
  )
}
export function useGetStudentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetStudentsQuery,
    GetStudentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetStudentsQuery,
    GetStudentsQueryVariables
  >(GetStudentsDocument, options)
}
export type GetStudentsQueryHookResult = ReturnType<
  typeof useGetStudentsQuery
>
export type GetStudentsLazyQueryHookResult = ReturnType<
  typeof useGetStudentsLazyQuery
>
export type GetStudentsQueryResult = Apollo.QueryResult<
  GetStudentsQuery,
  GetStudentsQueryVariables
>
