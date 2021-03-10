import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Alltest() {
    return (
        <div id="Alltest_body">
            <div id="Alltest_Top">
                <button className="Alltest_Search_Btn">실시간 순위 보러가기</button>
            </div>
            <div id="Alltest_Top_Tag">
                <button className="Alltest_Tag">멜로</button>
                <button className="Alltest_Tag">사냥</button>
                <button className="Alltest_Tag">메이플</button>
                <button className="Alltest_Tag">진격의 거인</button>
                <button className="Alltest_Tag">진격의 거인</button>
            </div>
            <div id="Alltest_Test">
                <Card id="Alltest_Card">
                    <Card.Header as="h5">당신의 전생 계급은??</Card.Header>
                    <Card.Body>
                        <Card.Text className="Alltest_Test_Text">
                            10000명이 플레이 함!
                        </Card.Text>
                        <Card.Text className="Alltest_Test_Text">
                            제작자 : 트카 오리지널
                        </Card.Text>
                        <div id="Alltest_Card_Btn">
                            <Button id="Alltest_Go_Test" variant="primary">
                                테스트 하기
                            </Button>
                            <button className="Alltest_Tag">메이플</button>
                            <button className="Alltest_Tag">진격의 거인</button>
                        </div>
                    </Card.Body>
                    <hr/>
                </Card>
                <Card id="Alltest_Card">
                    <Card.Header as="h5">당신의 전생 계급은??</Card.Header>
                    <Card.Body>
                        <Card.Text className="Alltest_Test_Text">
                            10000명이 플레이 함!
                        </Card.Text>
                        <Card.Text className="Alltest_Test_Text">
                            제작자 : 트카 오리지널
                        </Card.Text>
                        <div id="Alltest_Card_Btn">
                            <Button id="Alltest_Go_Test" variant="primary">
                                테스트 하기
                            </Button>
                            <button className="Alltest_Tag">메이플</button>
                            <button className="Alltest_Tag">진격의 거인</button>
                        </div>
                    </Card.Body>
                    <hr/>
                </Card>
                <Card id="Alltest_Card">
                    <Card.Header as="h5">당신의 전생 계급은??</Card.Header>
                    <Card.Body>
                        <Card.Text className="Alltest_Test_Text">
                            10000명이 플레이 함!
                        </Card.Text>
                        <Card.Text className="Alltest_Test_Text">
                            제작자 : 트카 오리지널
                        </Card.Text>
                        <div id="Alltest_Card_Btn">
                            <Button id="Alltest_Go_Test" variant="primary">
                                테스트 하기
                            </Button>
                            <button className="Alltest_Tag">메이플</button>
                            <button className="Alltest_Tag">진격의 거인</button>
                        </div>
                    </Card.Body>
                    <hr/>
                </Card>
                <Card id="Alltest_Card">
                    <Card.Header as="h5">당신의 전생 계급은??</Card.Header>
                    <Card.Body>
                        <Card.Text className="Alltest_Test_Text">
                            10000명이 플레이 함!
                        </Card.Text>
                        <Card.Text className="Alltest_Test_Text">
                            제작자 : 트카 오리지널
                        </Card.Text>
                        <div id="Alltest_Card_Btn">
                            <Button id="Alltest_Go_Test" variant="primary">
                                테스트 하기
                            </Button>
                            <button className="Alltest_Tag">메이플</button>
                            <button className="Alltest_Tag">진격의 거인</button>
                        </div>
                    </Card.Body>
                    <hr/>
                </Card>
                <Card id="Alltest_Card">
                    <Card.Header as="h5">당신의 전생 계급은??</Card.Header>
                    <Card.Body>
                        <Card.Text className="Alltest_Test_Text">
                            10000명이 플레이 함!
                        </Card.Text>
                        <Card.Text className="Alltest_Test_Text">
                            제작자 : 트카 오리지널
                        </Card.Text>
                        <div id="Alltest_Card_Btn">
                            <Button id="Alltest_Go_Test" variant="primary">
                                테스트 하기
                            </Button>
                            <button className="Alltest_Tag">메이플</button>
                            <button className="Alltest_Tag">진격의 거인</button>
                        </div>
                    </Card.Body>
                    <hr/>
                </Card>
                <Card id="Alltest_Card">
                    <Card.Header as="h5">당신의 전생 계급은??</Card.Header>
                    <Card.Body>
                        <Card.Text className="Alltest_Test_Text">
                            10000명이 플레이 함!
                        </Card.Text>
                        <Card.Text className="Alltest_Test_Text">
                            제작자 : 트카 오리지널
                        </Card.Text>
                        <div id="Alltest_Card_Btn">
                            <Button id="Alltest_Go_Test" variant="primary">
                                테스트 하기
                            </Button>
                            <button className="Alltest_Tag">메이플</button>
                            <button className="Alltest_Tag">진격의 거인</button>
                        </div>
                    </Card.Body>
                    <hr/>
                </Card>
            </div>
            <div id="Alltest_Page">
                <button className="Alltest_Page_Btn">
                    <FontAwesomeIcon
                    icon={faAngleLeft} 
                    />
                </button>
                <button className="Alltest_Page_Btn">
                    <FontAwesomeIcon
                    icon={faAngleRight} 
                    />
                </button>
            </div>
        </div>
    );
}

export default Alltest;