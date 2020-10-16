import React  from 'react';
import {Link} from 'react-router-dom'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import  {CometChat} from '@cometchat-pro/chat'
import { useHistory } from 'react-router'

export const Group = () => {
    const [name, setName] = React.useState('')
    const [passwords, setPassword] = React.useState('')
    const [active,setActive] = React.useState(true)
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const history = useHistory()


const createGroup = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)

  var GUID = name;
  var groupName = name;
  var groupType = CometChat.GROUP_TYPE.PUBLIC;
  var password = passwords;
  
  var group = new CometChat.Group(GUID, groupName, groupType, password);
  
  CometChat.createGroup(group).then(
      group => {
         history.push('/message')
      },
      error => {
          console.log("Group creation failed with exception:", error);
      }
  );
setIsSubmitting(false)
setName('')
setPassword('')
}

const joinGroup = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  var GUID = name;
  var password = passwords;
  var groupType = CometChat.GROUP_TYPE.PUBLIC;
  
  CometChat.joinGroup(GUID, groupType, password).then(
    group => {
      history.push('/message')
    },
    error => {
      console.log("Group joining failed with exception:", error);
    }
  ); 
setIsSubmitting(false)
setName('')
setPassword('')
}


    return(  
      <div className="bg-color">           
           <Container>
            <Row>
                <Col md={4} > 
                </Col>
                <Col md={4} className='margin-top'>
                  {active ?
                  <>
                  <h5><strong>CREATE A GROUP </strong></h5>

                  <Form onSubmit={createGroup}>
                  <Form.Control type='text' placeholder='Enter name of the group' className='mt-2' name='name' onChange={(e)=> setName(e.target.value)} />
                  <Form.Control type='password' placeholder='Enter password for the group' className='mt-2' name='password' onChange={(e)=> setPassword(e.target.value)} />
                  <div>
                  <a href='#' onClick={()=>setActive(false)}>Click to join a Group</a>
                  <Link to='/message' className='float-right'>list Group</Link>
                  </div>
                    <Button type='submit' variant="primary" className='bt-width mt-4' disabled={isSubmitting}>
                        Create {isSubmitting ? (<i className="fa fa-spinner fa-spin"></i>) : null}
                        </Button>
                  </Form>
                  </>
                  : 
                  <>
                  <h5><strong>JOIN A GROUP </strong></h5>

                  <Form onSubmit={joinGroup}>
                  <Form.Control type='text' placeholder='Enter name of the group' className='mt-2' name='name' onChange={(e)=> setName(e.target.value)} />
                  <Form.Control type='password' placeholder='Enter password for the group' className='mt-2' name='password' onChange={(e)=> setPassword(e.target.value)} />
                  <div>
                  <a href='#' onClick={()=>setActive(true)}>Click to create a Group</a>
                  <Link to='/message' className='float-right'>list Group</Link>
                  </div>
                    <Button type='submit' variant="primary" className='bt-width mt-4' disabled={isSubmitting}>
                        Create {isSubmitting ? (<i className="fa fa-spinner fa-spin"></i>) : null}
                    </Button>
                  </Form>
                  </>
                  }
                
                </Col>
                <Col md={4}> 
                </Col>
            </Row>
           </Container>
           </div>
        
)
    } 
