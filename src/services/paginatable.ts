// import { Identifiable } from '../models/identifiable';
import { Representable } from '../models/representable';

export interface Paginatable<TEntity extends Representable> {
  // eslint-disable-next-line no-unused-vars
  getPaginated(pageNumber: number, pageSize: number): TEntity[];
  getTotalCount(): number;
}
