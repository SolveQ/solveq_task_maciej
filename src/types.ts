enum EmployeeStates {
  ADDED = "ADDED",
  IN_CHECK = "IN-CHECK",
  APPROVED = "APPROVED",
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

interface IEmployee {
  firstName: string;
  lastName: string;
  id: number;
  state: EmployeeStates;
}
