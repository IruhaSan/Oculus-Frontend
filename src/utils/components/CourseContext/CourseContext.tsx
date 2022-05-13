/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { CourseType } from '@/utils/model';

const CourseContext = createContext<CourseType[]>([]);

export default CourseContext;
