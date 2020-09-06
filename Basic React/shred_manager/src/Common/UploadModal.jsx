import React from 'react'
import { Button, Header, Image, Modal, Input } from 'semantic-ui-react'
//styles
import styles from './UploadModal.module.scss'

function UploadModal({ onChangeProductName , onChangeStock , onClickAddItem , nameValue , stockValue}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button className={styles.add_item_btn}>Upload new item</Button>}
      
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='' wrapped />
        <Modal.Description>
          <Header>Upload a new product</Header>
            <div className={styles.input_section}>
                <div className={styles.input_section_text}>
                    Product Name:
                </div>
                <Input 
                className={styles.input_field}
                onChange={(e) => onChangeProductName(e)}
                value={nameValue}/>
            </div>
            <div className={styles.input_section}>
                <div className={styles.input_section_text}>
                    Stock:
                </div>
                <Input 
                className={styles.input_field}
                onChange={(e) => onChangeStock(e)}
                value={stockValue}/>
            </div>
            <div className={styles.input_section}>
                <div className={styles.input_section_text}>
                    Choose product image:
                </div>
                <input type="file"n  />
            </div>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Upload new item"
          labelPosition='right'
          icon='checkmark'
          onClick={() => 
            {setOpen(false)
            onClickAddItem()}}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default UploadModal;
