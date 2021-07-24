import { FunctionComponent } from "react";
import "./StatusBar.css";
import classNames from "classnames";
import { Button } from "antd";

const StatusButton = ({
  isCurrent,
  children,
  onClick,
}: {
  isCurrent?: boolean;
  children: string;
  onClick: () => void;
}) => {
  const statusButtonClassName = classNames("status-button", {
    "status-button-active": isCurrent,
  });
  return (
    <Button
      className={statusButtonClassName}
      type={isCurrent ? "primary" : "ghost"}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export const StatusBar: FunctionComponent<{
  state: EmployeeStates;
  itemId: number;
  onClick: (itemId: number, state: string) => void;
}> = ({ state, itemId, onClick }) => {
  return (
    <div className="status-bar">
      <StatusButton
        isCurrent={state === "ADDED"}
        onClick={() => onClick(itemId, "ADDED")}
      >
        Added
      </StatusButton>
      <StatusButton
        isCurrent={state === "IN-CHECK"}
        onClick={() => onClick(itemId, "IN-CHECK")}
      >
        In-check
      </StatusButton>
      <StatusButton
        isCurrent={state === "APPROVED"}
        onClick={() => onClick(itemId, "APPROVED")}
      >
        Approved
      </StatusButton>
      <StatusButton
        isCurrent={state === "ACTIVE"}
        onClick={() => onClick(itemId, "ACTIVE")}
      >
        Active
      </StatusButton>
      <StatusButton
        isCurrent={state === "INACTIVE"}
        onClick={() => onClick(itemId, "INACTIVE")}
      >
        Inactive
      </StatusButton>
    </div>
  );
};
