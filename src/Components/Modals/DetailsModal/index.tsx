import * as React from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import './DetailsModal.scss';
import { DetailsModalProps } from './interfaces';

export class DetailsModal extends React.Component<DetailsModalProps, {}> {
  render() {
    const {
      title, content, closeAction, isOpen, isBusy, onSubmit, size,
    } = this.props;
    return (
      <React.Fragment>
        <Modal
          style={{
            display: 'flex',
            maxWidth: '45rem',
          }}
          size={size || 'tiny'}
          centered={false}
          open={isOpen}
          onClose={closeAction}
          closeOnEscape={false}
          closeOnDimmerClick={false}
        >
          <Modal.Header>{title}</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <div className="modal-content">
                {content}
              </div>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <div>
              <Button
                loading={isBusy}
                primary
                onClick={onSubmit}
              >
                <Icon name="check" />
                Save
              </Button>
              <Button
                default
                onClick={closeAction}
                disabled={isBusy}
              >
                <Icon name="close" />
                Cancel
              </Button>
            </div>
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    );
  }
}

export default DetailsModal;
