import styled from 'styled-components';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(prop) {
    return (
        <Box>
            <img src={ `https://github.com/${prop.githubUser}.png` } style={{ borderRadius: '8px' }}/>
        </Box>
    )
}

export default function Home() {
    const userName = 'erickmedrado';
    const listUsers = [
        'juunegreiros',
        'omariosouto',
        'peas',
        'rafaballerini',
        'marcobrunodev',
        'felipefialho',
    ];
    return (
        <>
            <AlurakutMenu />
            <MainGrid>
                <div className="profileArea" style={{ gridArea: 'profileArea'}}>
                    <ProfileSidebar githubUser={userName} />
                </div>
                <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
                    <Box >
                        <h1 className="title">
                            Bem Vindo(a)
                        </h1>

                        <OrkutNostalgicIconSet/>
                    </Box>
                </div>
                <div className="relationsArea" style={{ gridArea: 'relationsArea'}}>
                    <ProfileRelationsBoxWrapper>
                        <h2 className="smallTitle">
                            Pessoas da comunidade ({listUsers.length})
                        </h2>
                        <ul>
                            {listUsers.map((itemAtual) => {
                                return (
                                    <li>
                                        <a href={`/users/${itemAtual}`} key={itemAtual}>
                                            <img src={`https://github.com/${itemAtual}.png`} />
                                            <span>{itemAtual}</span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </ProfileRelationsBoxWrapper>
                    <Box>
                        Comunidade
                    </Box>
                </div>
            </MainGrid>
        </>
    )
}
