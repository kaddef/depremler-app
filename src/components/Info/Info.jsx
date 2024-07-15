import { FaGithub } from "react-icons/fa";
import "./Icon.css"

function Info() {
  return (
    <div className="info">
      <p className="kandilli-info">
        Bu sitede yer alan deprem verileri&nbsp;
        <a
          href="http://www.koeri.boun.edu.tr/scripts/lst1.asp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Boğaziçi Üniversitesi Kandilli Rasathanesi ve Deprem Araştırma
          Enstitüsü Bölgesel Deprem-Tsunami İzleme Ve Değerlendirme Merkezi
        </a>
        &#39;nden alınmıştır. Daha detaylı bilgi için siteyi ziyaret
        edebilirsiniz.
      </p>
      <a
        className="project-info"
        href="https://github.com/kaddef"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="github-icon" />
      </a>
    </div>
  );
}

export default Info;
