import React, { useState } from 'react'
import { Button, Modal } from 'antd';

function Works() {
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false)

  }
  return (
    <div id="works" className="block worksBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>How it works</h2>
          <p>Perspiciatis vero similique, ut ducimus modi ipsam autem tempora</p>
        </div>
        <div className="contentHolder">
          <Button size="large" onClick={showModal}><i className="fas fa-play"></i></Button>
        </div>
        <Modal
          title="Demo Video"
          visible={visible}
          onCancel={handleCancel}
          footer={null}
          destroyOnClose={true}
        >

          <iframe title="Demo Video" width="100%" height="315" src="https://www.youtube.com/embed/P_rbC-qgB5o" ></iframe>

        </Modal>
      </div>
    </div>
  )
}

export default Works