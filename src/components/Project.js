import styled from 'styled-components'
import IconFolder from './icons/folder';
import IconExternal from './icons/external';
import IconGitHub from './icons/github';
import { Link } from 'react-router-dom';

const StyledProject = styled.div`
    background-color: var(--light-navy);
    border-radius: 4px;
    padding: 25px;
    height: fit-content;
    width: 350px;
    height: auto;
    flex-grow: 1;
    transition: .3s ease;
    &:hover{
        transform: translateY(-5px);
    }
    .container{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .project-links{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .folder-icon{
                svg{
                    fill: var(--green);
                    height: 40px;
                    width: 40px;
                }
            }
            .links{
                a{
                    color: inherit
                }
                svg{
                    height: 24px;
                    width: 24px;
                    margin-left: 20px;
                }
            }
        }
        h1{
            color: var(--lightest-slate);
            font-weight: 600;
            margin-top: 20px;
            margin-bottom: 12px;
        }
        p{
            color: var(--light-slate);
            font-size: 14px;
        }
        .technologies{
            margin-top: 20px;
            span{
                font-size: 14px;
                color: var(--slate);
                font-family: var(--font-mono);
                margin-right: 16px;
            }
        }
    }
`;

const Project = ({ title, desc, github, external, tech }) => {
    return (
        <StyledProject>
            <div className="container">
                <div>
                    <div className='project-links'>
                        <span className='folder-icon'><IconFolder /></span>
                        <span className='links'>
                            {github && <a href={github} target="_blank"><IconGitHub /></a>}
                            {external && <a href={external} target="_blank"><IconExternal /></a>}
                        </span>
                    </div>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
                <div  className='technologies'>
                    {
                        tech && tech.map((item, idx) => {
                            return <span key={`${title}-${idx}`}>{item}</span>
                        })
                    }
                </div>
            </div>
        </StyledProject>
    )
}

export default Project