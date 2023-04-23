import { JobsList } from "@/DummyData";
import {List,Card,Row,Col} from 'antd';

const feed = function(){
    return (
        <List
        dataSource={JobsList}
        renderItem={(item,i)=>(
            <Card>
                <Row>
                    <Col></Col>
                    <Col>
                    <Row>
                    <h1>{item.name}</h1>
                    </Row>
                    </Col>
                </Row>
            </Card>
    )}
        />       
    )
}

export default feed;