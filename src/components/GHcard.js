import React from 'react'

function GHcard() {
    
    const html = `
    <div class="columns">
    <div class="column is-one-quarter">
        <div class="card" id="cardfolio">
            <div class="card-image" id="profilepic">
                <figure class="image container is-128x128">
                    <img class="is-rounded" src="https://avatars.githubusercontent.com/u/104995933?v=4" />
                </figure>
            </div>
            <div class="has-text-centered" id="name">
                <a href="https://github.com/zrendy" target="_blank">Rendy Zhang</a>
            </div>
            <div class="has-text-centered" id="languages">
                <span class="is-info tag" id="item">JavaScript</span> <span class="is-info tag" id="item">HTML</span>
            </div>
            <div class="has-text-centered" id="repos">
                <img style="vertical-align:middle" src="https://raw.githubusercontent.com/capturemathan/Gitcard/master/assets/images/cloud.png" height="40" width="40" />        
                <span id="repotext">10 Repositories</span>
            </div>
            <div class="has-text-centered" id="contributions">
                <img style="vertical-align:middle" src="https://raw.githubusercontent.com/capturemathan/Gitcard/master/assets/images/graph.png" height="40" width="40">
                <span id="contribtext">386 Contributions</span>
            </div>
            <footer class="card-footer" id="follow">
                <div class="card-footer-item">0 Followers</div>
                <div class="card-footer-item">0 Following</div>
            </footer>
        </div>
    </div>
    </div>
    `;
  
  return (<div dangerouslySetInnerHTML={{ __html: html }} />)
}

export default GHcard