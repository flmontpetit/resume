export default interface Position {
  index: number;
  company: string;
  title: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  summary: string[];
}
