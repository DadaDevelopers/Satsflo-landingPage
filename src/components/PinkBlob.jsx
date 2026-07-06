
import pinkBlob from "../assets/images/pink-blob.svg";
const PinkBlob = ({ className = "", ...props }) => {
  return (
    <img src={pinkBlob} alt="pink blob" className={className} {...props} />
  );
};

export default PinkBlob;
