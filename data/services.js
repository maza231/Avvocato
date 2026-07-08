export const services = [
  {
    slug: 'diritto-civile',
    title: 'Diritto civile',
    intro: 'Assistenza nelle controversie tra privati e imprese, dalla consulenza preventiva alla rappresentanza in giudizio.',
    topics: ['Contratti e obbligazioni', 'Sfratti ed esecuzioni', 'Responsabilità e risarcimento'],
    description: 'Le questioni civili incidono spesso sul patrimonio, sui rapporti personali e sulla continuità di un’attività. Lo Studio analizza documenti e obiettivi per individuare la strada più efficace, valutando prima le possibilità di soluzione stragiudiziale.',
    help: ['Redazione e revisione di contratti', 'Diffide, messe in mora e negoziazione', 'Sfratti, pignoramenti ed esecuzioni', 'Richieste di risarcimento del danno', 'Controversie condominiali'],
    process: ['Analisi dei fatti e dei documenti', 'Valutazione di costi, tempi e alternative', 'Negoziazione o azione giudiziaria']
  },
  {
    slug: 'famiglia-e-persone',
    title: 'Famiglia e persone',
    intro: 'Tutela attenta nelle fasi più delicate, con soluzioni sostenibili e particolare attenzione ai minori.',
    topics: ['Separazioni e divorzi', 'Tutela dei minori', 'Amministrazione di sostegno'],
    description: 'Nelle vicende familiari la soluzione giuridica deve tenere conto delle persone e degli equilibri futuri. Lo Studio offre un confronto riservato e concreto, favorendo l’accordo quando possibile e assicurando tutela in giudizio quando necessario.',
    help: ['Separazione consensuale o giudiziale', 'Divorzio e modifica delle condizioni', 'Affidamento e mantenimento dei figli', 'Negoziazione assistita', 'Amministrazione di sostegno'],
    process: ['Ascolto della situazione familiare', 'Definizione delle priorità', 'Ricerca dell’accordo o tutela giudiziale']
  },
  {
    slug: 'successioni',
    title: 'Successioni',
    intro: 'Consulenza per pianificare e gestire il passaggio patrimoniale, prevenendo o risolvendo conflitti.',
    topics: ['Accettazione e rinuncia', 'Divisioni ereditarie', 'Contenzioso successorio'],
    description: 'Una successione può richiedere decisioni rapide e una lettura precisa del patrimonio e dei rapporti tra eredi. Lo Studio assiste nella fase preliminare, nella divisione e nelle eventuali controversie ereditarie.',
    help: ['Accettazione con beneficio d’inventario', 'Rinuncia all’eredità', 'Interpretazione e impugnazione del testamento', 'Tutela della quota di legittima', 'Divisione dei beni ereditari'],
    process: ['Ricostruzione dell’asse ereditario', 'Verifica dei diritti degli eredi', 'Accordo divisorio o contenzioso']
  },
  {
    slug: 'diritto-penale',
    title: 'Diritto penale',
    intro: 'Difesa e assistenza in ogni fase del procedimento, anche nell’ambito della difesa d’ufficio.',
    topics: ['Indagini preliminari', 'Difesa processuale', 'Reati contro persona e patrimonio'],
    description: 'Nel procedimento penale tempestività e strategia sono essenziali. L’assistenza è rivolta sia alla persona sottoposta a indagini o imputata, sia alla persona offesa che intenda comprendere e tutelare i propri diritti.',
    help: ['Assistenza durante le indagini', 'Difesa dell’imputato', 'Denunce, querele e costituzione di parte civile', 'Misure cautelari', 'Esecuzione penale'],
    process: ['Esame degli atti disponibili', 'Definizione della strategia difensiva', 'Assistenza in ogni fase del procedimento']
  },
  {
    slug: 'consumatori-e-banche',
    title: 'Consumatori e banche',
    intro: 'Tutela nei rapporti con istituti di credito, assicurazioni e fornitori di beni o servizi.',
    topics: ['Controversie bancarie', 'Sinistri e assicurazioni', 'Trasporto aereo e utenze'],
    description: 'I rapporti di consumo sono caratterizzati da contratti complessi e da una forte asimmetria informativa. Lo Studio verifica la documentazione, formula contestazioni e assiste il cliente nei reclami e nelle controversie.',
    help: ['Contestazione di addebiti e bollette', 'Contratti bancari e finanziamenti', 'Polizze e risarcimenti assicurativi', 'Acquisti e diritto di recesso', 'Disservizi nel trasporto aereo'],
    process: ['Verifica del contratto e delle comunicazioni', 'Reclamo e tentativo di composizione', 'Ricorso o azione giudiziaria']
  },
  {
    slug: 'imprese-ed-enti',
    title: 'Imprese ed enti',
    intro: 'Supporto operativo nelle relazioni commerciali e nei rapporti con la Pubblica Amministrazione.',
    topics: ['Recupero crediti', 'Diffide e messe in mora', 'Sanzioni amministrative'],
    description: 'Imprese, professionisti ed enti hanno bisogno di risposte tempestive e compatibili con la continuità operativa. Lo Studio affianca il cliente nella prevenzione dei rischi e nella gestione delle controversie.',
    help: ['Recupero stragiudiziale e giudiziale dei crediti', 'Contrattualistica commerciale', 'Controversie con enti pubblici', 'Opposizione a sanzioni amministrative', 'Consulenza continuativa'],
    process: ['Inquadramento del problema operativo', 'Scelta dell’intervento più sostenibile', 'Gestione della pratica e aggiornamenti']
  }
];

export const getService = slug => services.find(service => service.slug === slug);
