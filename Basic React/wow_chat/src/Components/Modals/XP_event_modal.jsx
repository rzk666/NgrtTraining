import React, { useState } from 'react';
// -----Components----- //
import {
  Button, Header, Image, Modal, Input,
} from 'semantic-ui-react';
// -----Images----- //
import XPImage from '../../Static/Modals/XP.png';
// hocs
import withHover from '../../hocs/withHover';

const XPEventModal = ({
  onChangeXP, onClickXP, inputValue, setCurrentModalEvent,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button style={{ marginRight: 20 }}>XP Event</Button>}
    >
      <Modal.Header>
        XP Event
      </Modal.Header>
      <Modal.Content image>
        <Image
          size="medium"
          src={XPImage}
          wrapped
        />
        <Modal.Description>
          <Header>
            Add XP Event
          </Header>
          <p>
            Please enter how much XP would you like to add:
          </p>
          <Input
            onChange={(e) => onChangeXP(e)}
            value={inputValue}
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="black"
          onClick={() => {
            setOpen(false);
            setCurrentModalEvent('');
          }}
        >
          Close
        </Button>
        <Button
          content="Add new event"
          labelPosition="right"
          icon="checkmark"
          onClick={() => {
            setOpen(false);
            onClickXP();
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default withHover(XPEventModal);
