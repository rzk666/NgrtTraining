import React, { useState } from 'react';
import {
  Button, Header, Image, Modal, Input,
} from 'semantic-ui-react';

const XPEventModal = ({ onChangeXP, onClickXP, inputValue }) => {
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
          src="https://titles.trackercdn.com/modern-warfare/db/images/icon_double_xp_token_legendary.png?7940430"
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
          onClick={() => setOpen(false)}
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
}

export default XPEventModal;
