import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Table,
  Menu,
  Label,
  Icon,
  Pagination,
  Modal,
  Button,
  Segment,
  Loader,
  Header,
  Input,
  Message,
  Card,
  CardGroup,
} from "semantic-ui-react";
import Finecup from "./D.webp";
import { Link } from "react-router-dom";
import { logout, authLogin } from "../store/actions/auth";
import { connect } from "react-redux";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          username: "isketchley0",
          email: "rmacalees0@amazon.co.jp",
          track: "Full-Stack",
          task: "Hotels.ng",
          score: 5,
        },
        {
          username: "hschelle1",
          email: "ktomaello1@bravesites.com",
          track: "Design",
          task: "Chatbot",
          score: 2,
        },
        {
          username: "snice2",
          email: "hmatthiae2@biglobe.ne.jp",
          track: "Design",
          task: "Hotels.ng",
          score: 1,
        },
        {
          username: "pschruyer3",
          email: "egohn3@cbc.ca",
          track: "Design",
          task: "Chatbot",
          score: 5,
        },
        {
          username: "lvint4",
          email: "bhaycock4@icio.us",
          track: "Frontend",
          task: "Design",
          score: 2,
        },
        {
          username: "gtoffolo5",
          email: "xcrippell5@sitemeter.com",
          track: "Frontend",
          task: "MyCustomer",
          score: 6,
        },
        {
          username: "treinbech6",
          email: "gvala6@wikispaces.com",
          track: "Frontend",
          task: "MyCustomer",
          score: 6,
        },
        {
          username: "fhunnybun7",
          email: "wblanchard7@va.gov",
          track: "Frontend",
          task: "Chatbot",
          score: 6,
        },
        {
          username: "draft8",
          email: "cteodoro8@businesswire.com",
          track: "Full-Stack",
          task: "Design",
          score: 2,
        },
        {
          username: "kplanque9",
          email: "fkneeland9@baidu.com",
          track: "Design",
          task: "Chatbot",
          score: 9,
        },
        {
          username: "gashleya",
          email: "utwedea@privacy.gov.au",
          track: "Full-Stack",
          task: "Chatbot",
          score: 6,
        },
        {
          username: "tchalcroftb",
          email: "nmcgeechanb@tinypic.com",
          track: "Design",
          task: "HNG Board",
          score: 9,
        },
        {
          username: "rpitrolloc",
          email: "ddoctorc@mayoclinic.com",
          track: "Design",
          task: "SMS client",
          score: 7,
        },
        {
          username: "achennellsd",
          email: "cfortyed@nytimes.com",
          track: "Full-Stack",
          task: "Design",
          score: 10,
        },
        {
          username: "wbirde",
          email: "craftere@google.pl",
          track: "Full-Stack",
          task: "Excel Parser",
          score: 6,
        },
        {
          username: "cleprovestf",
          email: "nsharpef@webmd.com",
          track: "Full-Stack",
          task: "MyCustomer",
          score: 2,
        },
        {
          username: "mgeggg",
          email: "lsheahang@wikimedia.org",
          track: "Design",
          task: "MyCustomer",
          score: 8,
        },
        {
          username: "vlumbleyh",
          email: "acalcuth@biblegateway.com",
          track: "Design",
          task: "MyCustomer",
          score: 9,
        },
        {
          username: "mmuglestoni",
          email: "apasticznyki@ow.ly",
          track: "Backend",
          task: "MyCustomer",
          score: 4,
        },
        {
          username: "gmeenanj",
          email: "tfownesj@theatlantic.com",
          track: "Backend",
          task: "Excel Parser",
          score: 6,
        },
        {
          username: "mleahk",
          email: "fcrosskillk@harvard.edu",
          track: "Design",
          task: "Chatbot",
          score: 4,
        },
        {
          username: "jgasquoinel",
          email: "opetrel@ebay.com",
          track: "Backend",
          task: "Chatbot",
          score: 5,
        },
        {
          username: "lhobbingm",
          email: "sruttym@yale.edu",
          track: "Frontend",
          task: "Hotels.ng",
          score: 6,
        },
        {
          username: "hgopsalln",
          email: "awatkissn@businessweek.com",
          track: "Backend",
          task: "Excel Parser",
          score: 8,
        },
        {
          username: "parnio",
          email: "acobbino@forbes.com",
          track: "Full-Stack",
          task: "SMS client",
          score: 7,
        },
        {
          username: "ysennerp",
          email: "dsabathep@163.com",
          track: "Backend",
          task: "SMS client",
          score: 9,
        },
        {
          username: "bkalinovichq",
          email: "pskittleq@ebay.com",
          track: "Full-Stack",
          task: "SMS client",
          score: 9,
        },
        {
          username: "tconfaitr",
          email: "marthargr@e-recht24.de",
          track: "Backend",
          task: "SMS client",
          score: 2,
        },
        {
          username: "ccaheys",
          email: "ftashs@sogou.com",
          track: "Frontend",
          task: "Hotels.ng",
          score: 4,
        },
        {
          username: "lwristt",
          email: "rgarrettt@merriam-webster.com",
          track: "Frontend",
          task: "Design",
          score: 7,
        },
        {
          username: "bocullenu",
          email: "nthulbornu@shutterfly.com",
          track: "Design",
          task: "HNG Board",
          score: 7,
        },
        {
          username: "alambertv",
          email: "tmcglaudv@globo.com",
          track: "Frontend",
          task: "Design",
          score: 1,
        },
        {
          username: "dyekelw",
          email: "esiblyw@chronoengine.com",
          track: "Full-Stack",
          task: "Hotels.ng",
          score: 9,
        },
        {
          username: "aconnockx",
          email: "ptallquistx@army.mil",
          track: "Backend",
          task: "Design",
          score: 4,
        },
        {
          username: "dklinky",
          email: "kmcquaidey@creativecommons.org",
          track: "Full-Stack",
          task: "Chatbot",
          score: 6,
        },
        {
          username: "mbowldz",
          email: "ikissickz@ucoz.ru",
          track: "Frontend",
          task: "MyCustomer",
          score: 7,
        },
        {
          username: "hroll10",
          email: "ltowns10@who.int",
          track: "Frontend",
          task: "HNG Board",
          score: 1,
        },
        {
          username: "kdonoher11",
          email: "glairdcraig11@etsy.com",
          track: "Full-Stack",
          task: "Excel Parser",
          score: 3,
        },
        {
          username: "ahilary12",
          email: "dmclennan12@guardian.co.uk",
          track: "Frontend",
          task: "Design",
          score: 2,
        },
        {
          username: "nmccaster13",
          email: "mbrocklesby13@ustream.tv",
          track: "Backend",
          task: "Excel Parser",
          score: 1,
        },
        {
          username: "bmaton14",
          email: "rcastaignet14@blog.com",
          track: "Design",
          task: "Chatbot",
          score: 2,
        },
        {
          username: "lturmel15",
          email: "mwarde15@privacy.gov.au",
          track: "Design",
          task: "MyCustomer",
          score: 6,
        },
        {
          username: "djedrzejewsky16",
          email: "nbowie16@answers.com",
          track: "Full-Stack",
          task: "MyCustomer",
          score: 10,
        },
        {
          username: "lbrindle17",
          email: "erosas17@twitter.com",
          track: "Frontend",
          task: "Excel Parser",
          score: 10,
        },
        {
          username: "alangstrath18",
          email: "cgrunnell18@macromedia.com",
          track: "Backend",
          task: "SMS client",
          score: 5,
        },
        {
          username: "acattermole19",
          email: "xbrunskill19@cafepress.com",
          track: "Frontend",
          task: "SMS client",
          score: 6,
        },
        {
          username: "kmaven1a",
          email: "fpiggins1a@constantcontact.com",
          track: "Backend",
          task: "Chatbot",
          score: 1,
        },
        {
          username: "bbourrel1b",
          email: "djerson1b@yale.edu",
          track: "Frontend",
          task: "SMS client",
          score: 9,
        },
        {
          username: "iguerri1c",
          email: "fdunklee1c@newsvine.com",
          track: "Full-Stack",
          task: "SMS client",
          score: 7,
        },
        {
          username: "bgolagley1d",
          email: "ppetre1d@cnbc.com",
          track: "Full-Stack",
          task: "Hotels.ng",
          score: 9,
        },
        {
          username: "rpencot1e",
          email: "btinman1e@statcounter.com",
          track: "Frontend",
          task: "SMS client",
          score: 2,
        },
        {
          username: "emcdougle1f",
          email: "bkupke1f@theglobeandmail.com",
          track: "Design",
          task: "Hotels.ng",
          score: 2,
        },
        {
          username: "hsickamore1g",
          email: "ederrington1g@naver.com",
          track: "Frontend",
          task: "Design",
          score: 8,
        },
        {
          username: "kkeelin1h",
          email: "afreschini1h@istockphoto.com",
          track: "Backend",
          task: "Chatbot",
          score: 10,
        },
        {
          username: "aburlingame1i",
          email: "adurdy1i@berkeley.edu",
          track: "Full-Stack",
          task: "Design",
          score: 6,
        },
        {
          username: "ahandaside1j",
          email: "bthurling1j@nifty.com",
          track: "Backend",
          task: "MyCustomer",
          score: 3,
        },
        {
          username: "nglassford1k",
          email: "ysheilds1k@howstuffworks.com",
          track: "Full-Stack",
          task: "Chatbot",
          score: 2,
        },
        {
          username: "cdezuani1l",
          email: "mboullin1l@last.fm",
          track: "Backend",
          task: "Design",
          score: 5,
        },
        {
          username: "twoolerton1m",
          email: "cbraybrookes1m@cmu.edu",
          track: "Design",
          task: "SMS client",
          score: 6,
        },
        {
          username: "gemons1n",
          email: "rwodeland1n@ebay.co.uk",
          track: "Design",
          task: "Design",
          score: 2,
        },
        {
          username: "jroarty1o",
          email: "istatton1o@dailymail.co.uk",
          track: "Full-Stack",
          task: "Design",
          score: 8,
        },
        {
          username: "ystraun1p",
          email: "nkislingbury1p@scientificamerican.com",
          track: "Frontend",
          task: "HNG Board",
          score: 10,
        },
        {
          username: "bstangoe1q",
          email: "lfetherston1q@youku.com",
          track: "Full-Stack",
          task: "Excel Parser",
          score: 8,
        },
        {
          username: "fgary1r",
          email: "cakred1r@blinklist.com",
          track: "Frontend",
          task: "Hotels.ng",
          score: 8,
        },
        {
          username: "psouthwell1s",
          email: "dstollard1s@npr.org",
          track: "Frontend",
          task: "HNG Board",
          score: 1,
        },
        {
          username: "cgensavage1t",
          email: "jdevereu1t@chron.com",
          track: "Frontend",
          task: "MyCustomer",
          score: 9,
        },
        {
          username: "ggravatt1u",
          email: "chartwell1u@wordpress.org",
          track: "Full-Stack",
          task: "Excel Parser",
          score: 7,
        },
        {
          username: "kgatcliff1v",
          email: "nellsom1v@linkedin.com",
          track: "Backend",
          task: "HNG Board",
          score: 3,
        },
        {
          username: "srandles1w",
          email: "nboulstridge1w@oaic.gov.au",
          track: "Frontend",
          task: "Design",
          score: 3,
        },
        {
          username: "vcleevely1x",
          email: "khullot1x@reverbnation.com",
          track: "Backend",
          task: "MyCustomer",
          score: 7,
        },
        {
          username: "mquixley1y",
          email: "emcnamara1y@engadget.com",
          track: "Design",
          task: "Design",
          score: 1,
        },
        {
          username: "jstolting1z",
          email: "kkohtler1z@edublogs.org",
          track: "Design",
          task: "Excel Parser",
          score: 6,
        },
        {
          username: "nierland20",
          email: "smclelland20@ustream.tv",
          track: "Design",
          task: "SMS client",
          score: 9,
        },
        {
          username: "sclynman21",
          email: "fmerali21@digg.com",
          track: "Full-Stack",
          task: "Excel Parser",
          score: 4,
        },
        {
          username: "aoolahan22",
          email: "rmazzeo22@e-recht24.de",
          track: "Design",
          task: "SMS client",
          score: 10,
        },
        {
          username: "lhucke23",
          email: "tingon23@163.com",
          track: "Design",
          task: "SMS client",
          score: 5,
        },
        {
          username: "gchestney24",
          email: "dsleicht24@elegantthemes.com",
          track: "Frontend",
          task: "HNG Board",
          score: 7,
        },
        {
          username: "amasedon25",
          email: "mbaysting25@google.com.br",
          track: "Frontend",
          task: "Excel Parser",
          score: 9,
        },
        {
          username: "trubes26",
          email: "windruch26@oracle.com",
          track: "Design",
          task: "Design",
          score: 4,
        },
        {
          username: "rspurriar27",
          email: "ljamrowicz27@google.co.jp",
          track: "Design",
          task: "SMS client",
          score: 6,
        },
        {
          username: "dpepall28",
          email: "tgenery28@forbes.com",
          track: "Frontend",
          task: "Chatbot",
          score: 3,
        },
        {
          username: "ghankins29",
          email: "apovele29@themeforest.net",
          track: "Full-Stack",
          task: "HNG Board",
          score: 8,
        },
        {
          username: "mcostigan2a",
          email: "tengall2a@friendfeed.com",
          track: "Frontend",
          task: "MyCustomer",
          score: 6,
        },
        {
          username: "seyckelbeck2b",
          email: "cbester2b@geocities.jp",
          track: "Full-Stack",
          task: "HNG Board",
          score: 7,
        },
        {
          username: "ghammerberger2c",
          email: "jhilldrup2c@networkadvertising.org",
          track: "Backend",
          task: "Design",
          score: 9,
        },
        {
          username: "cmantrip2d",
          email: "aapplewhaite2d@cdc.gov",
          track: "Frontend",
          task: "HNG Board",
          score: 6,
        },
        {
          username: "blowensohn2e",
          email: "dsoigoux2e@youtube.com",
          track: "Design",
          task: "Design",
          score: 9,
        },
        {
          username: "idobbison2f",
          email: "twinmill2f@hibu.com",
          track: "Backend",
          task: "Hotels.ng",
          score: 4,
        },
        {
          username: "jmockler2g",
          email: "ugutsell2g@vistaprint.com",
          track: "Full-Stack",
          task: "Hotels.ng",
          score: 2,
        },
        {
          username: "fsnellman2h",
          email: "atracy2h@rambler.ru",
          track: "Design",
          task: "Chatbot",
          score: 2,
        },
        {
          username: "gmunn2i",
          email: "cletteresse2i@howstuffworks.com",
          track: "Design",
          task: "MyCustomer",
          score: 5,
        },
        {
          username: "dbettis2j",
          email: "gwaddam2j@bloglines.com",
          track: "Design",
          task: "Design",
          score: 5,
        },
        {
          username: "mvoice2k",
          email: "acosstick2k@earthlink.net",
          track: "Design",
          task: "Excel Parser",
          score: 5,
        },
        {
          username: "tlipp2l",
          email: "jafonso2l@intel.com",
          track: "Design",
          task: "HNG Board",
          score: 7,
        },
        {
          username: "ckender2m",
          email: "tericssen2m@arstechnica.com",
          track: "Design",
          task: "MyCustomer",
          score: 8,
        },
        {
          username: "cogiany2n",
          email: "rstrowther2n@youtube.com",
          track: "Design",
          task: "MyCustomer",
          score: 2,
        },
        {
          username: "gmeadley2o",
          email: "hszreter2o@youku.com",
          track: "Backend",
          task: "Excel Parser",
          score: 3,
        },
        {
          username: "anelle2p",
          email: "lworley2p@netscape.com",
          track: "Frontend",
          task: "Hotels.ng",
          score: 7,
        },
        {
          username: "bferro2q",
          email: "rteresi2q@myspace.com",
          track: "Design",
          task: "MyCustomer",
          score: 4,
        },
        {
          username: "aaps2r",
          email: "brogge2r@gov.uk",
          track: "Design",
          task: "MyCustomer",
          score: 1,
        },
      ],
      activePage: 1,
      loading: true,
      error: "",
      value: "",
      file: null,
      descending: false,
      title: null,
    };
  }

  getData = () => {
    if (this.props.authenticated) {
      axios.get(`/api/file/${this.props.token}`).then((res) => {
        this.setState({ title: res.data.title });
        axios.get(res.data.file).then((res) => {
          this.setState({
            data: res.data.sort((a, b) => {
              if (this.state.descending === true) {
                if (a.score < b.score) {
                  return -1;
                }
                if (a.score > b.score) {
                  return 1;
                }
                return 0;
              }
              if (this.state.descending === false) {
                if (a.score < b.score) {
                  return 1;
                }
                if (a.score > b.score) {
                  return -1;
                }
                return 0;
              }
            }),
          });
        });
      });
    }
  };
  componentDidMount() {
    this.getData();
  }
  componentDidUpdate() {
    if (this.state.title === null) {
      this.getData();
    }
  }
  submit = () => {
    this.props.login(this.state.value);
  };
  changeState = (event) => {
    this.setState({ value: event.target.value });
  };
  onFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  };
  uploadFile = () => {
    let form_data = new FormData();
    form_data.append("file", this.state.file, this.state.file.name);
    form_data.append("title", this.state.title);
    form_data.append("username", this.props.token);
    this.setState({ loading: true });
    if (this.state.title === null) {
      axios
        .post(`/api/file/${this.props.token}/`, form_data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          this.getData();
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .put(`/api/file/${this.props.token}/`, form_data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          this.getData();
        })
        .catch((err) => console.log(err));
    }
  };
  changeDescending = () => {
    this.setState({ descending: !this.state.descending });
  };
  render() {
    console.log(this.state.data);
    const { activePage } = this.state.activePage;
    return (
      <div>
        <Message>
          {this.props.authenticated ? (
            <div>
              <p className="text-center">
                Welcome <span className="u-name">{this.props.token}</span> View
                your uploaded file below or upload a new one
              </p>
              <div class="wrapper">
                <div class="file-upload">
                  <input onChange={this.onFileChange} type="file" name="file" />
                  <i class="fa fa-arrow-up"></i>
                  <br />
                  <Button onClick={this.uploadFile}>Upload</Button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p>
                You are not logged in. Please enter your preferred username. If
                it already exists, you will be logged in, otherwise you will be
                signed up
              </p>

              <Input
                action={<Button onClick={this.submit}>Login/Signup</Button>}
                fluid
                onChange={this.changeState}
                value={this.state.value}
                placeholder="username"
              />
            </div>
          )}
        </Message>

        {this.state.loading ? (
          <div>
            <CardGroup itemsPerRow={3}>
              {this.state.data.slice(0, 3).map((data) => (
                <Card>
                  <Card.Content>
                    <Icon className="best" name="trophy" />
                    <Card.Header>{data.username} </Card.Header>
                    <Card.Meta>{data.email}</Card.Meta>
                    <Card.Description>{data.track}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>{data.score} points</a>
                  </Card.Content>
                </Card>
              ))}
            </CardGroup>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Username</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Track</Table.HeaderCell>
                  <Table.HeaderCell>Task</Table.HeaderCell>
                  <Table.HeaderCell>
                    score
                    {this.state.descending ? (
                      <Icon
                        onClick={this.changeDescending}
                        name="long arrow alternate up"
                      />
                    ) : (
                      <Icon
                        onClick={this.changeDescending}
                        name="long arrow alternate down"
                      />
                    )}
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {this.state.data
                  .sort((a, b) => {
                    if (this.state.descending === true) {
                      if (a.score < b.score) {
                        return -1;
                      }
                      if (a.score > b.score) {
                        return 1;
                      }
                      return 0;
                    }
                    if (this.state.descending === false) {
                      if (a.score < b.score) {
                        return 1;
                      }
                      if (a.score > b.score) {
                        return -1;
                      }
                      return 0;
                    }
                  })
                  .map((data) => (
                    <Table.Row>
                      <Table.Cell>{data.username}</Table.Cell>
                      <Table.Cell>{data.email}</Table.Cell>
                      <Table.Cell>{data.track}</Table.Cell>
                      <Table.Cell>{data.task}</Table.Cell>
                      <Table.Cell>{data.score}</Table.Cell>
                    </Table.Row>
                  ))}
              </Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan="5"></Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </div>
        ) : (
          <Segment>
            <div style={{ height: "200px" }}>
              <Loader active size="big">
                Loading...
              </Loader>
            </div>
          </Segment>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.token !== null,
    cart: state.cart.shoppingCart,
    token: state.auth.token,
    loading: state.cart.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    login: (username) => dispatch(authLogin(username)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
