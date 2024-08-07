export interface UserCreateDTO {
  PhoneNumber: string | null;
  Pseudo: string;
  Mail: string;
  Mdp: string;
  MdpConfirm: string;
  Role: string;
}
