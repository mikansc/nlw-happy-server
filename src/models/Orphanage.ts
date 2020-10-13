import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("orphanages")
export class Orphanage {
  @PrimaryGeneratedColumn("increment") id: number;
  @Column() name: string;
  @Column() latitude: number;
  @Column() longitude: number;
  @Column() about: string;
  @Column() opening_hours: string;
  @Column() open_on_weekends: boolean;
}
