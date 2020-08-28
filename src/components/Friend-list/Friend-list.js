import React from 'react';


function FriendsList({friends}) {
    return (
        <section className="friends">
            <ul>
                {friends.map(
                    ({name, avatar, isOnline, id}) =>(<li key={id} className="item">
                    <span className="status">{isOnline}</span>
                    <img className="avatar" src={avatar} alt="" width="48" />
                    <p className="name">{name}</p>
                  </li>)
                )}
            </ul>
        </section>
    )
}

export default FriendsList