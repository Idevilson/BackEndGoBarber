import Appointment from '../infra/typeorm/entities/appointment';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTo';

export default interface IApoinmentRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
