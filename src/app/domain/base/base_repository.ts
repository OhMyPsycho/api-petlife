import { Model } from "sequelize";
import { BaseOperations } from "../interfaces/base_operations";

class BaseRepository<T> implements BaseOperations<T> {
  private items: Record<string, T> = {};

  async create(item: T): Promise<T> {
    // Agregar lógica asincrónica para crear un elemento y resolver la promesa con el valor
    // Por ejemplo: this.items[id] = item; return item;
    return item;
  }

  async findOne(id: string): Promise<T | undefined> {
    // Agregar lógica asincrónica para encontrar un elemento por su ID y resolver la promesa con el valor
    // Por ejemplo: return this.items[id];
    return undefined;
  }

  async findAll(query: T): Promise<{ count: number; rows: T[] }> {
    // Agregar lógica asincrónica para obtener todos los elementos y resolver la promesa con el valor
    // Por ejemplo: return Object.values(this.items);
    return {count: 0, rows: []};
  }

  async update(id: string, newItem: T): Promise<void> {
    // Agregar lógica asincrónica para actualizar un elemento y resolver la promesa
    // Por ejemplo: this.items[id] = newItem;
  }

  async delete(id: string): Promise<void> {
    // Agregar lógica asincrónica para eliminar un elemento y resolver la promesa
    // Por ejemplo: delete this.items[id];
  }
}

export default BaseRepository;