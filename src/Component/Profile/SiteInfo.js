import ProfileInput from "../Profile/ProfileInput.js";
import { useState, useEffect } from "react";

const SiteInfo = () => {

  const [site,setSite] = useState("")
  const [team,setTeam] = useState("")
  const [recommender,setRecommender] = useState("")
  const [discordAccount,setDiscordAccount] = useState("")
  const [dailyIncome,setDailyIncome] = useState("")
  const [parttimeIncome,setParttimeIncome] = useState("")
  
  let handleChangeSite=(e) => {
    setSite(e.target.value);
  }
  let handleChangeTeam=(e) => {
    setTeam(e.target.value);
  }
  let handleChangeRecommender=(e) => {
    setRecommender(e.target.value);
  }
  let handleChangeDiscordAccount=(e) => {
    setDiscordAccount(e.target.value);
  }
  let handleChangeDailyIncome=(e) => {
    setDailyIncome(e.target.value);
  }
  let handleChangeParttimeIncome=(e) => {
    setParttimeIncome(e.target.value);
  }

  useEffect(() => {
    console.log(site)
    console.log(team)
    console.log(recommender)
    console.log(discordAccount)
    console.log(dailyIncome)
    console.log(parttimeIncome)
  }, [site, team, recommender, discordAccount, dailyIncome, parttimeIncome])


  return (
    <div className="flex flex-row h-auto pt-8">
      <div className="flex-col space-y-5">
        <div className="">
          <div className="font-bold text-2xl">Site</div>
        </div>
        <div className="flex space-x-10">
          <ProfileInput label="Site" onChange={handleChangeSite} value={site}/>
          <ProfileInput label="Team" onChange={handleChangeTeam} value={team}/>
          <ProfileInput label="ผู้แนะนำเข้า Odds" onChange={handleChangeRecommender} value={recommender}/>
        </div>
        <div className="flex space-x-10">
          <ProfileInput label="Discord Account" onChange={handleChangeDiscordAccount} value={discordAccount}/>
          <ProfileInput label="รายได้ต่อวัน" onChange={handleChangeDailyIncome} value={dailyIncome}/>
          <ProfileInput label="รายได้ต่อชั่วโมง (Part-time)" onChange={handleChangeParttimeIncome} value={parttimeIncome}/>
        </div>
      </div>
    </div>
  );
};

export default SiteInfo;
