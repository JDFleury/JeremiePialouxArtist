import React from 'react';
import './about.styles.scss';
import ProfilePicture from '../../assets/profilePicture.jpg';
import { peinture, abstrait, matiere, lumiere } from '../../websiteText';
// Redux
import { connect } from 'react-redux';
import { useEffect } from 'react';

const AboutPage = ({ textData, language }) => {
  //SEO
  useEffect(() => {
    if (language === 'FR') {
      document.title = `Bio - KAMONN`;
      document
        .querySelector('meta[name="description"]')
        .setAttribute(
          'content',
          `Kamonn fais de la peinture, car c’est ce qui me fait voir l’autre côté. L’autre côté de la porte ou le soleil brille plus fort, les couleurs sont plus intenses, les fruits ont meilleurs goûts. Je suis diplômé d’un Master de gestion des risques financiers, j’ai donc pris le risque immense de goûter à ce côté-là en espérant pouvoir y passer le reste de ma vie.`
        );
    } else {
      document.title = `About - KAMONN`;
      document
        .querySelector('meta[name="description"]')
        .setAttribute(
          'content',
          `Kamonn paints because it is what makes me see the other side. The other side of the door where the sun shines brighter, the colors are more intense, the fruits taste better. I have a Master's degree in financial risk management, so I took the huge risk of tasting that side hoping to spend the rest of my life there.`
        );
    }
  }, [language]);

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // TEXT CHANGES
  // Peinture
  let peintureText = peinture;
  if (textData.peinture !== '' && textData.peintureEn !== '') {
    if (language === 'FR') {
      peintureText = textData.peinture;
    } else {
      peintureText = textData.peintureEn;
    }
  }
  // Abstrait
  let abstraitText = abstrait;
  let abstractTitle = 'Abstrait';
  if (textData.abstrait !== '' && textData.abstraitEn !== '') {
    if (language === 'FR') {
      abstraitText = textData.abstrait;
    } else {
      abstraitText = textData.abstraitEn;
    }
  }
  if (textData.abstraitTitle !== '' && textData.abstraitTitleEn !== '') {
    if (language === 'FR') {
      abstractTitle = textData.abstraitTitle;
    } else {
      abstractTitle = textData.abstraitTitleEn;
    }
  }
  // Matière
  let matiereText = matiere;
  let matiereTitle = 'Matiere';
  if (textData.matiere !== '' && textData.matiereEn !== '') {
    if (language === 'FR') {
      matiereText = textData.matiere;
    } else {
      matiereText = textData.matiereEn;
    }
  }
  if (textData.matiereTitle !== '' && textData.matiereTitleEn !== '') {
    if (language === 'FR') {
      matiereTitle = textData.matiereTitle;
    } else {
      matiereTitle = textData.matiereTitleEn;
    }
  }
  // Lumière et Couleur
  let lumiereText = lumiere;
  let lumiereTitle = 'Lumiere'
  if (textData.lumiere !== '' && textData.lumiereEn !== '') {
    if (language === 'FR') {
      lumiereText = textData.lumiere;
    } else {
      lumiereText = textData.lumiereEn;
    }
  }
  if (textData.lumiereTitle !== '' && textData.lumiereTitleEn !== '') {
    if (language === 'FR') {
      lumiereTitle = textData.lumiereTitle;
    } else {
      lumiereTitle = textData.lumiereTitleEn;
    }
  }

  return (
    <div className="aboutPageContainer container-fluid">
      <div className="row aboutInfo d-none d-md-flex">
        <div className="col-6 p-4">
          {/* Peinture */}
          <div className="peinture">
            <p>{peintureText}</p>
          </div>
          {/* Matiere */}
          <div className="matiere mt-5">
            <h2>{matiereTitle}</h2>
            <p>{matiereText}</p>
          </div>
        </div>
        <div className="col-6 p-4">
          <div className="profilePicture d-flex justify-content-center align-items-start">
            <img src={ProfilePicture} alt="Kamonn Profile" />
          </div>
          {/* Abstrait */}
          <div className="abstrait">
            <h2>{abstractTitle}</h2>
            <p>{abstraitText}</p>
          </div>
          {/* Lumière et Couleur */}
          <div className="lumiere mt-5">
            <h2>
              {lumiereTitle}
            </h2>
            <p>{lumiereText}</p>
          </div>
        </div>
      </div>
      <div className="row aboutInfo d-flex d-md-none">
        <div className="col-12 p-4">
          <div className="profilePicture d-flex justify-content-center">
            <img src={ProfilePicture} alt="Kamonn Profile" />
          </div>
        </div>
        <div className="col-12 p-4">
          {/* Peinture */}
          <div className="peinture">
            <p>{peintureText}</p>
          </div>
        </div>
        <div className="col-12 p-4">
          {/* Abstrait */}
          <div className="abstrait">
            <h2>{abstractTitle}</h2>
            <p>{abstraitText}</p>
          </div>
        </div>
        <div className="col-12 p-4">
          {/* Matiere */}
          <div className="matiere">
            <h2>{matiereTitle}</h2>
            <p>{matiereText}</p>
          </div>
        </div>
        <div className="col-12 p-4">
          {/* Lumière et Couleur */}
          <div className="lumiere">
            <h2>{lumiereTitle}</h2>
            <p>{lumiereText}</p>
          </div>
        </div>
      </div>
      <div className="row mt-5 d-flex justify-content-center">
        <p className="text-center">Copyright &copy; 2022 Kamonn</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  textData: state.text.textData,
  language: state.text.language,
});

export default connect(mapStateToProps)(AboutPage);
