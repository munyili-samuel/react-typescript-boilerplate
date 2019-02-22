// react
import * as React from 'react';

// third party
import { Button, Message, Modal } from 'semantic-ui-react';

// others
import { DeleteConfirmationDialogProps } from 'components/Modals/DeleteConfirmationDialog/interfaces';

const DeleteConfirmationDialog = (props: DeleteConfirmationDialogProps) => {
  const {
    isOpen, closeAction, name, action, isBusy, message, hasError,
  } = props;
  return (
    <Modal
      open={isOpen}
      closeOnEscape
      closeOnDimmerClick
      onClose={closeAction}
      size="tiny"
    >
      <Modal.Header>Confirm Delete</Modal.Header>
        <Modal.Content className="delete-modal">
          {hasError &&
            <Message className="ui negative message">
              <Message.Header>Oops! Something happened</Message.Header>
              <p className="text ui danger">
                {message}
              </p>
            </Message>
          }
          {!hasError && <p>{`Are you sure you want to permanently delete ${name}?`}</p>}
      </Modal.Content>
      <Modal.Actions>
        <Button
          left
          onClick={closeAction}
          positive
          content="No"
          labelPosition="right"
          icon="close"
          disabled={isBusy}
        />
        <Button
          onClick={action}
          negative
          content="Delete"
          loading={isBusy}
          disabled={isBusy}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteConfirmationDialog;
