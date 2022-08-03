import'./UserInfoStyle.css'

function UserInfo(props) {
    const avatarURL = 'https://www.kindpng.com/picc/m/484-4841650_png-clipart-marge-simpson-marge-simpson-png-transparent.png'
    const userName = 'Marge'
    return (
        <div className={'UserInfo'}>
            <img className={"AvatarImg"} src={avatarURL} alt={'user avatar'}/>
            <div> {userName}</div>


        </div>
    );
}

export {UserInfo}