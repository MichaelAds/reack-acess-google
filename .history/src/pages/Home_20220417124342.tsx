import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg'

// webpack (snowpack, vite, ...) - colocar as imagens dessa forma

export function Home() {
    return(
        <div>
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>

            <main>
                <img src="" alt="" />
            </main>
        </div>
    )
}