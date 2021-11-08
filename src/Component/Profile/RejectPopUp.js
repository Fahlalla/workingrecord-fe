import { Prompt } from "react-router";



const RejectPopUp = () => {

  componentDidUpdate = () => {
    if (shouldBlockNavigation) {
      window.onbeforeunload = () => true;
    } else {
      window.onbeforeunload = undefined;
    }
  };

  

  return (
    <>
      <Prompt
        when={shouldBlockNavigation}
        message="You have unsaved changes, are you sure you want to leave?"
      />
      {/* Component JSX */}
    </>
  );
};

export default RejectPopUp;