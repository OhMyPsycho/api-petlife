
export interface BaseOperations<T> {
    create(item: T): Promise<T>;
    findOne(id: string): Promise<T | undefined>;
    findAll(query: T): Promise<{ count: number; rows: T[] }>;
    update(id: string, newItem: T): Promise<void>;
    delete(id: string): Promise<void>;
  }