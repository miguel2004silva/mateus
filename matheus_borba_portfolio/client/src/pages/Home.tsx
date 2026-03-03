import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, ArrowRight, Code, TrendingUp, Briefcase, Award } from "lucide-react";

/**
 * Design System: Minimalismo Corporativo Sofisticado
 * - Paleta: Monocromática (cinza, charcoal) + acentos em azul profundo (navy)
 * - Tipografia: Poppins (headlines) + Inter (body)
 * - Layout: Grid assimétrico com espaçamento generoso
 * - Interações: Transições suaves, hover effects discretos
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">MB</h1>
          <div className="flex gap-8 items-center">
            <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">Sobre</a>
            <a href="#experiencia" className="text-sm font-medium hover:text-primary transition-colors">Experiência</a>
            <a href="#projetos" className="text-sm font-medium hover:text-primary transition-colors">Projetos</a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663176878284/6Du8zqLF9FSZrDhgnL4UD2/hero-background-a3pahWRGoQ8LciY7JrEJZE.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-background/40 z-1" />
        
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="mb-6 inline-block">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                Bem-vindo ao meu portfólio
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
              Matheus Borba
            </h1>
            
            <p className="text-xl text-foreground/80 mb-8 max-w-xl leading-relaxed">
              Analista de Marketing Digital & Vendas | Estrategista de Negócios | Especialista em Tráfego Pago | Empreendedor
            </p>
            
            <div className="flex gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Entrar em Contato
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Sobre Mim</h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                Com mais de dois anos de experiência prática, sou um profissional apaixonado por transformar desafios em resultados mensuráveis. Minha jornada profissional é marcada pela atuação em vendas consultivas de alto ticket e marketing digital, onde desenvolvi uma visão estratégica aguçada e uma forte capacidade de execução.
              </p>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                Sou movido por dados e pela busca contínua por otimização, sempre com o objetivo de impulsionar o crescimento e a eficiência dos negócios. Meu espírito empreendedor me levou a fundar a CreatorsLab.ai e criar a Comunidade VEC, que capacita mais de 1.000 membros.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="mailto:matheus@email.com" className="text-primary hover:text-primary/80 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-8 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <TrendingUp className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">+100 Leads/Mês</h3>
                <p className="text-sm text-foreground/60">Gerados via Google Ads e Meta Ads</p>
              </Card>
              
              <Card className="p-8 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <Briefcase className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">10 Vendas/Mês</h3>
                <p className="text-sm text-foreground/60">Veículos de alto ticket</p>
              </Card>
              
              <Card className="p-8 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <Award className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">125/125 Pontos</h3>
                <p className="text-sm text-foreground/60">Avaliação máxima no TRF1</p>
              </Card>
              
              <Card className="p-8 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <Code className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">1.000+ Membros</h3>
                <p className="text-sm text-foreground/60">Comunidade VEC</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência Section */}
      <section id="experiencia" className="py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16">Experiência Profissional</h2>
          
          <div className="space-y-8">
            {/* Roma Motors */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Analista de Marketing Digital & Vendas Web</h3>
                  <p className="text-primary font-semibold mt-2">Roma Motors — Brasília, DF</p>
                </div>
                <span className="text-sm text-foreground/60 bg-secondary px-4 py-2 rounded">Jan. 2023 – Atual</span>
              </div>
              
              <ul className="space-y-3 text-foreground/70">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Responsável pela <strong>geração e gestão de +100 leads/mês</strong> via Google Ads e Meta Ads, administrando verba de R$ 1.500/mês em tráfego pago.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Atingi média de <strong>10 vendas/mês de veículos de alto ticket</strong>, atuando em todo o ciclo: captação, atendimento consultivo, análise de crédito e fechamento.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Estruturei e otimizei <strong>processos de CRM</strong>, aumentando a taxa de conversão de leads em vendas.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Gerenciei estratégia de <strong>social media, branding e comunicação digital</strong> da empresa.</span>
                </li>
              </ul>
            </Card>
            
            {/* TRF1 */}
            <Card className="p-8 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Estagiário Jurídico – Unidade DIFEV</h3>
                  <p className="text-primary font-semibold mt-2">Tribunal Regional Federal da 1ª Região (TRF1) — Brasília, DF</p>
                </div>
                <span className="text-sm text-foreground/60 bg-secondary px-4 py-2 rounded">Mar. 2021 – Mar. 2023</span>
              </div>
              
              <ul className="space-y-3 text-foreground/70">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Atuação de 2 anos em órgão federal de grande porte com suporte administrativo e jurídico.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Avaliação de desempenho com <strong>nota máxima (125/125 pontos)</strong>, reconhecido por assiduidade, disciplina e capacidade de aprendizado.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-24 bg-background">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Projetos & Empreendedorismo</h2>
            <p className="text-lg text-foreground/60">Iniciativas que demonstram meu espírito empreendedor e capacidade de inovação</p>
          </div>
          
          <div 
            className="relative mb-16 rounded-lg overflow-hidden h-96"
            style={{
              backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663176878284/6Du8zqLF9FSZrDhgnL4UD2/projects-section-E9VAHfpAXb8XvScLMZjynq.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-primary/20" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Comunidade VEC */}
            <Card className="p-8 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Comunidade VEC</h3>
              <p className="text-foreground/70 mb-6">
                Criação e gestão de comunidade digital de capacitação comercial com <strong>+1.000 membros ativos</strong>. Foco em vendas, estratégia e copywriting.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Liderança</span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Comunidade</span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Educação</span>
              </div>
            </Card>
            
            {/* CreatorsLab.ai */}
            <Card className="p-8 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">CreatorsLab.ai</h3>
              <p className="text-foreground/70 mb-6">
                Fundação de startup voltada ao desenvolvimento de <strong>soluções em IA e automações para negócios digitais</strong>. Inovação e tecnologia NoCode.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Startup</span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">IA</span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">NoCode</span>
              </div>
            </Card>
            
            {/* Infoprodutos */}
            <Card className="p-8 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Infoprodutos & Funis</h3>
              <p className="text-foreground/70 mb-6">
                Desenvolvimento e venda de produtos digitais com <strong>estruturação completa de funil de vendas e copywriting</strong> de alta conversão.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Vendas</span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Copywriting</span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Marketing</span>
              </div>
            </Card>
            
            {/* Yumi Gummies */}
            <Card className="p-8 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">Yumi Gummies</h3>
              <p className="text-foreground/70 mb-6">
                Marca de suplementos desenvolvida em projeto acadêmico de empreendedorismo, com <strong>plano de negócios completo, branding e estratégia de go-to-market</strong>.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Branding</span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Estratégia</span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">E-commerce</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Competências Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <h2 className="text-4xl font-bold mb-16">Competências & Certificações</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Competências */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Principais Competências</h3>
              <div className="space-y-4">
                {[
                  'Vendas Consultivas & Negociação de Alto Ticket',
                  'Análise Estratégica e Visão de Negócio',
                  'Google Ads & Meta Ads (Tráfego Pago)',
                  'Automação com IA (Ferramentas NoCode)',
                  'Gestão de CRM e Pipeline de Vendas',
                  'Liderança e Gestão de Comunidades',
                  'Funis de Vendas & Copywriting',
                  'Branding & Gestão de Redes Sociais'
                ].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certificações */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Certificações</h3>
              <div className="space-y-4">
                {[
                  'Google Ads (Certificação Oficial)',
                  'Facebook Ads / Meta Business',
                  'Performance de Vendas — Rotina de Sucesso',
                  'Especialista em Marketplace',
                  'Marketing Digital & Copywriting para Vendas',
                  'NoCode StartUp — IA e Automações'
                ].map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Formação */}
          <div className="bg-background p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold mb-6">Formação Acadêmica</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-lg">Bacharelado em Direito</h4>
                <p className="text-foreground/60">Instituição de Ensino Superior — Brasília, DF</p>
                <p className="text-sm text-foreground/50 mt-1">9º Semestre | Previsão de Conclusão: 2025/2026</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">Técnico em Transações Imobiliárias (TTI)</h4>
                <p className="text-foreground/60">Registro CRECI Ativo (2024–2025)</p>
              </div>
              <div>
                <h4 className="font-bold text-lg">Inglês — Nível Intermediário</h4>
                <p className="text-foreground/60">CILT Taguatinga — Diploma Concluído</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Vamos Conversar?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades, parcerias e desafios. Entre em contato comigo para discutir como posso ajudar seu negócio a crescer.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.location.href = 'mailto:matheus@email.com'}
            >
              <Mail className="mr-2 w-4 h-4" />
              Enviar Email
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              <Linkedin className="mr-2 w-4 h-4" />
              LinkedIn
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a href="mailto:matheus@email.com" className="text-white/60 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-8">
        <div className="container text-center text-foreground/60 text-sm">
          <p>© 2026 Matheus Borba. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
