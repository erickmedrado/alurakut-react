import styled from 'styled-components';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu } from '../src/lib/AlurakutCommons';

function ProfileSidebar(prop) {
    return (
        <Box>
            <img src={ `https://github.com/${prop.githubUser}.png` } style={{ borderRadius: '8px' }}/>
        </Box>
    )
}

export default function Home() {
    const userName = 'erickmedrado';
    return (
        <>
            <AlurakutMenu />
            <MainGrid>
                <div clasName="profileArea" style={{ gridArea: 'profileArea'}}>
                    <ProfileSidebar githubUser={userName} />
                </div>
                <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
                    <Box >
                        Bem Vindo
                    </Box>
                </div>
                <div className="relationsArea" style={{ gridArea: 'relationsArea'}}>
                    <Box>
                        Pessoas da Comunidade
                    </Box>
                    <Box>
                        Comunidade
                    </Box>
                </div>
            </MainGrid>
        </>
    )
}
