export type LectureType = {
    lectureTitle: string;
    lectureLink: string;
    lectureAbout: string;
}

export type MasterType = {
    masterName: string;
    masterAbout: string;
    masterLink: string;
}
export type CourseType = {
    courseTitle: string;
    courseSummary: string;
    lectures: LectureType[];
    masters: MasterType[];
    isReleased: boolean;
    isAnnounced: boolean;
    releaseDate?: string;
}

export type TestType = {
    question: string;
    options: string[];
    correctAnswerIndex: number;
}
