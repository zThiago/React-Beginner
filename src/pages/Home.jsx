import Menu from '../components/Menu';
import '../styles/Home.css';
import '../styles/default.css';

function Home() {
  return (
    <div>
      <div className="Header">
        <Menu />
      </div>
      <div className="Body">
        <div className="body_header">
          <h1 className='Title'>Home</h1>
        </div>
        <div className="body_descriptions">
          <div className="project_description d1">
          Project developed using React packages, the objective is to use some of the features offered in practice and to put into practice the knowledge obtained in a study carried out with the purpose of learning this framework.
          </div>
          <div className="project_description d2">
            My thanks to professor Dimitri from the <a href='https://www.youtube.com/@programacaoweb' target="_blank">Programação Web</a> channel, who, through his video <a href='https://www.youtube.com/watch?v=hd2B7XQAFls&ab_channel=Programa%C3%A7%C3%A3oWeb' target="_blank">React Course for Beginners</a>, made it possible to obtain the basic knowledge that introduced me to this technology.
          </div>
          <div className="project_description d3" style={{textAlign: 'center'}}>
          Developed by Thiago Cunha Ferreira.
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home