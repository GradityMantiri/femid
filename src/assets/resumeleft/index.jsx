
const Left = () => {
    return(
        <div className="resume_left">
        <div className="resume_profile">
          <img src="https://github.com/GradityMantiri/femid/blob/main/src/assets/Untitled%20design.png?raw=true" alt="profile_pic" />
        </div>
        <div className="resume_content">
          <div className="resume_item resume_info">
            <div className="title">
              <p className="bold">Gradity Mantiri</p>
              <p className="regular">Designer</p>
            </div>
            <ul>
              <li>
                <div className="icon">
                  <i className="fas fa-map-signs" />
                </div>
                <div className="data">
                  19 Street, Texas <br /> USA
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fas fa-mobile-alt" />
                </div>
                <div className="data">
                  +324 4445678
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fas fa-envelope" />
                </div>
                <div className="data">
                  Gradity@gmail.com
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fab fa-weebly" />
                </div>
                <div className="data">
                  www.Gradity.com
                </div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_skills">
            <div className="title">
              <p className="bold">skill's</p>
            </div>
            <ul>
              <li>
                <div className="skill_name">
                  HTML
                </div>
                <div className="skill_progress">
                  <span style={{width: '80%'}} />
                </div>
                <div className="skill_per">80%</div>
              </li>
              <li>
                <div className="skill_name">
                  CSS
                </div>
                <div className="skill_progress">
                  <span style={{width: '70%'}} />
                </div>
                <div className="skill_per">70%</div>
              </li>
              <li>
                <div className="skill_name">
                  SASS
                </div>
                <div className="skill_progress">
                  <span style={{width: '90%'}} />
                </div>
                <div className="skill_per">90%</div>
              </li>
              <li>
                <div className="skill_name">
                  JS
                </div>
                <div className="skill_progress">
                  <span style={{width: '60%'}} />
                </div>
                <div className="skill_per">60%</div>
              </li>
              <li>
                <div className="skill_name">
                  JQUERY
                </div>
                <div className="skill_progress">
                  <span style={{width: '88%'}} />
                </div>
                <div className="skill_per">88%</div>
              </li>
            </ul>
          </div>
          <div className="resume_item resume_social">
            <div className="title">
              <p className="bold">Social</p>
            </div>
            <ul>
              <li>
                <div className="icon">
                  <i className="fab fa-facebook-square" />
                </div>
                <div className="data">
                  <p className="semi-bold">Facebook</p>
                  <p>Gradity@facebook</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fab fa-twitter-square" />
                </div>
                <div className="data">
                  <p className="semi-bold">Twitter</p>
                  <p>Gradity@twitter</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fab fa-youtube" />
                </div>
                <div className="data">
                  <p className="semi-bold">Youtube</p>
                  <p>Gradity@youtube</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <i className="fab fa-linkedin" />
                </div>
                <div className="data">
                  <p className="semi-bold">Linkedin</p>
                  <p>Gradity@linkedin</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ) 
}

export default Left;