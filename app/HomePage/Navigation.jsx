import {Link} from "@remix-run/react";

export default function Navigation() {
  return (
    <div id="wd-makeSpace-navigation">
      <br/>
      <Link to="/MakeSpace/Home" id="wd-home-link">
        Logo
      </Link>
      <br />
      <input type="text" placeholder="search"/>
      <br />
      <button> + </button>
      <br/>
      <Link to="/MakeSpace/Inbox" id="wd-inbox-link">
        Inbox
      </Link>
      <br/>
      <Link to="/MakeSpace/Account" id="wd-account-link">
        Account
      </Link>
      <hr/>
    </div>
  );
}
