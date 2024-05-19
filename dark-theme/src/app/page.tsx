"use client"

import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { ThemeSwitch } from "./components/ThemeSwitch";
import { ThemeProvider, } from "./contexts/ThemeContext";

export default function Page() {

  return (
    <ThemeProvider>
      <div>
        <Container>
          <header className="py-5 text-3xl">
            <h1 className="py-10">Título da Página</h1>
          </header>
          <section>
            <p className="my-5">Conteúdo da página</p>

            <Button label="Clique aqui" onClick={() => { }} />
          </section>
          <ThemeSwitch />
        </Container>
      </div>
    </ThemeProvider>
  )
}
