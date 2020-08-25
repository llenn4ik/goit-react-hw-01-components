import React from 'react';


function FriendsList({friends}) {
    return (
        <section class="friends">
            <ul>
                {friends.map(
                    ({name, avatar, isOnline, id}) =>(<li key={id} class="item">
                    <span class="status">{isOnline}</span>
                    <img class="avatar" src={avatar} alt="" width="48" />
                    <p class="name">{name}</p>
                  </li>)
                )}
            </ul>
        </section>
    )
}

export default FriendsList