import { initModel } from '~/utils/common';

export interface Review {
  id: number;
  title: string;
  academyId: number;
  academyName: string;
  academyLogo: string;
  startGrade: string;
  subject: string;
  courseTerm: string;
  createdAt: string;
  className: string;
  teacherName: string;
  pros: string;
  cons: string;
  rating: number;
  writer: string;
  recommended: boolean;
}

export class ReviewModel implements Review {
  id = 0;
  title = '';
  academyId = 0;
  academyName = '';
  academyLogo = '';
  startGrade = '';
  subject = '';
  courseTerm = '';
  createdAt = '';
  className = '';
  teacherName = '';
  pros = '';
  cons = '';
  rating = 0;
  writer = '';
  recommended = false;

  constructor(data: Review | null) {
    if (data) {
      initModel(this, data);
    }
  }
}

export interface ReviewMeta {
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
}
