import Members from "../components/about-details/members";
import Recognitions from "../components/about-details/recognition";
import Talents from "../components/about-details/talents";
import Team from "../components/about-details/team";

export default function AboutPage() {
  return (
    <div className="max-w-9xl mx-auto">
      <Talents />
      <Team />
      <Recognitions />
      <Members />
    </div>
  );
}
