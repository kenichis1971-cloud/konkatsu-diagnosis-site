export const diagnosisTypeIds = [
  "careful",
  "speed",
  "natural",
  "condition",
  "confidence",
  "action",
  "restart",
  "values",
] as const;

export type DiagnosisTypeId = (typeof diagnosisTypeIds)[number];

export type DiagnosisOption = {
  label: string;
  type: DiagnosisTypeId;
};

export type DiagnosisQuestion = {
  id: string;
  text: string;
  options: DiagnosisOption[];
};

export type DiagnosisActionCard = {
  title: string;
  description: string;
};

export type DiagnosisResult = {
  id: DiagnosisTypeId;
  title: string;
  tendency: string;
  commonPattern: string;
  nextStep: string;
  actionCards: DiagnosisActionCard[];
};

export const tieBreakPriority: DiagnosisTypeId[] = [
  "values",
  "restart",
  "confidence",
  "action",
  "condition",
  "natural",
  "careful",
  "speed",
];

export function isDiagnosisTypeId(value: unknown): value is DiagnosisTypeId {
  return typeof value === "string" && diagnosisTypeIds.includes(value as DiagnosisTypeId);
}

export const diagnosisQuestions: DiagnosisQuestion[] = [
  {
    id: "q1",
    text: "今、婚活について一番近い気持ちは？",
    options: [
      { label: "ちゃんと相手を見極めてから進めたい", type: "careful" },
      { label: "できれば短期間で結果につなげたい", type: "speed" },
      { label: "婚活っぽすぎる場には少し抵抗がある", type: "natural" },
      { label: "そもそも自分が本当に結婚したいのか整理したい", type: "values" },
    ],
  },
  {
    id: "q2",
    text: "相手選びで一番大切にしたいことは？",
    options: [
      { label: "価値観や生活感覚が合うこと", type: "careful" },
      { label: "結婚への本気度が高いこと", type: "speed" },
      { label: "一緒にいて自然体でいられること", type: "natural" },
      { label: "年収・年齢・居住地など条件が合うこと", type: "condition" },
    ],
  },
  {
    id: "q3",
    text: "婚活で不安になりやすいことは？",
    options: [
      { label: "相手を信じていいか分からない", type: "careful" },
      { label: "時間だけが過ぎてしまいそう", type: "speed" },
      { label: "自分に魅力があるのか不安になる", type: "confidence" },
      { label: "過去の恋愛やブランクが気になる", type: "restart" },
    ],
  },
  {
    id: "q4",
    text: "出会い方として一番抵抗が少ないのは？",
    options: [
      { label: "信頼できる人やサービスを通した出会い", type: "careful" },
      { label: "結婚目的がはっきりした場での出会い", type: "speed" },
      { label: "趣味や日常の延長にある自然な出会い", type: "natural" },
      { label: "まずはアプリなどで気軽に話してみる出会い", type: "action" },
    ],
  },
  {
    id: "q5",
    text: "婚活がうまく進まない理由として近いものは？",
    options: [
      { label: "慎重になりすぎて決めきれない", type: "careful" },
      { label: "理想条件が多く、優先順位が分からない", type: "condition" },
      { label: "自信がなくて一歩引いてしまう", type: "confidence" },
      { label: "行動しなきゃと思いながら後回しにしてしまう", type: "action" },
    ],
  },
  {
    id: "q6",
    text: "結婚後の生活で一番重視したいことは？",
    options: [
      { label: "安心して話し合える関係", type: "careful" },
      { label: "将来設計を一緒に進められる関係", type: "speed" },
      { label: "無理せず自然体でいられる関係", type: "natural" },
      { label: "自分らしい結婚の形を選べる関係", type: "values" },
    ],
  },
  {
    id: "q7",
    text: "婚活サービスを使うなら、どんなものが合いそう？",
    options: [
      { label: "サポートがあり、相談しながら進められるもの", type: "careful" },
      { label: "結婚意識が高い人と効率よく出会えるもの", type: "speed" },
      { label: "自分のペースで無理なく使えるもの", type: "natural" },
      { label: "条件検索や比較がしやすいもの", type: "condition" },
    ],
  },
  {
    id: "q8",
    text: "過去の恋愛や経験について近いものは？",
    options: [
      { label: "失敗したくなくて慎重になっている", type: "careful" },
      { label: "過去よりこれからを重視して進めたい", type: "speed" },
      { label: "恋愛や婚活から少し離れていた時期がある", type: "restart" },
      { label: "まだ結婚に対する気持ちが定まりきっていない", type: "values" },
    ],
  },
  {
    id: "q9",
    text: "婚活で誰かに助けてもらうなら、何を助けてほしい？",
    options: [
      { label: "相手の見極め方を整理してほしい", type: "careful" },
      { label: "効率のよい進め方を知りたい", type: "speed" },
      { label: "自分に合う出会い方を知りたい", type: "natural" },
      { label: "自分の魅力や強みを整理してほしい", type: "confidence" },
    ],
  },
  {
    id: "q10",
    text: "今のあなたに一番必要そうな一歩は？",
    options: [
      { label: "焦らず、相手選びの軸を整えること", type: "careful" },
      { label: "期間を決めて具体的に動き始めること", type: "speed" },
      { label: "無理のない出会い方を選ぶこと", type: "natural" },
      { label: "結婚したい理由や理想の暮らしを見直すこと", type: "values" },
    ],
  },
];

export const diagnosisResults: Record<DiagnosisTypeId, DiagnosisResult> = {
  careful: {
    id: "careful",
    title: "慎重見極めタイプ",
    tendency: "相手との信頼関係や価値観の一致を大切にしながら、納得して進みたい傾向があります。焦って決めるより、安心して話し合える土台を一つずつ確認したいタイプです。",
    commonPattern: "慎重さが強く出ると、候補を比較し続けたり、少しの違和感で立ち止まったりすることがあります。見極めたい項目が増えすぎると、次の判断に進みにくくなるかもしれません。",
    nextStep: "譲れない軸を3つまでに絞り、初期段階で確認することと、時間をかけて見ることを分けてみましょう。必要に応じて相談先を持つと、選択肢を落ち着いて整理しやすくなります。",
    actionCards: [
      { title: "婚活コラム 準備中", description: "焦らず比較軸を整理するために、見極め方や確認ポイントを短くまとめています。" },
      { title: "結婚相談所比較 準備中", description: "サポート内容や相談のしやすさを比べながら、判断軸を整える参考情報です。" },
      { title: "婚活アプリ比較 準備中", description: "自分のペースで確認しやすい出会い方を、使いやすさの観点で整理できます。" },
      { title: "占い鑑定 準備中", description: "迷いを言葉にして、自己理解と選択肢整理を補助する参考ページです。" },
    ],
  },
  speed: {
    id: "speed",
    title: "短期集中婚活タイプ",
    tendency: "目的や期限を決めて、効率よく婚活を進めたい気持ちが強い傾向があります。結婚への温度感が近い相手と出会い、前に進む感覚を大切にしやすいタイプです。",
    commonPattern: "スピードを意識するあまり、疲れを見落としたり、短期間で判断しすぎたりすることがあります。予定を詰め込みすぎると、相手を見る余白が少なくなるかもしれません。",
    nextStep: "まずは活動期間と週ごとの行動量を決め、振り返り日もセットにしてみましょう。効率だけでなく、会った後の気持ちを記録すると、判断材料を増やしやすくなります。",
    actionCards: [
      { title: "結婚相談所比較 準備中", description: "活動ペースとサポート量を見比べて、短期集中で進める計画を立てやすくします。" },
      { title: "婚活アプリ比較 準備中", description: "限られた時間でも使いやすい機能や進め方を比較して整理できます。" },
      { title: "婚活コラム 準備中", description: "活動量の調整や振り返りのコツを押さえ、ペース配分を整えるヒント集です。" },
      { title: "占い鑑定 準備中", description: "気持ちを整えながら、自己理解と選択肢整理を補助する参考ページです。" },
    ],
  },
  natural: {
    id: "natural",
    title: "自然な出会い重視タイプ",
    tendency: "婚活らしさが強すぎる場よりも、自然体で話せる出会いや無理のないペースを大切にしたい傾向があります。日常の延長で、少しずつ関係が育つ形に安心しやすいタイプです。",
    commonPattern: "自然さを大切にするほど、結婚への温度感を確認するタイミングが遅くなることがあります。待つ時間が長くなると、行動量が不足しているのか相性を見ているのか分かりにくくなるかもしれません。",
    nextStep: "趣味・友人経由・アプリなど、自然に話しやすい入口を複数用意してみましょう。早い段階で結婚観を少しずつ話せる場を選ぶと、無理なく気持ちを整理しやすくなります。",
    actionCards: [
      { title: "婚活コラム 準備中", description: "無理のない出会い方を整理するために、会話や進め方のコツを短く確認できます。" },
      { title: "婚活アプリ比較 準備中", description: "自然に始めやすいサービスを、使い方や雰囲気の観点で比較できます。" },
      { title: "結婚相談所比較 準備中", description: "自然体を大切にしながら相談できるサポートの違いを整理できます。" },
      { title: "占い鑑定 準備中", description: "迷いを言葉にして、自己理解と選択肢整理を補助する参考ページです。" },
    ],
  },
  condition: {
    id: "condition",
    title: "条件整理タイプ",
    tendency: "年収・年齢・居住地・生活設計など、現実的な条件をきちんと確認したい傾向があります。結婚後の暮らしを具体的にイメージしながら考えやすいタイプです。",
    commonPattern: "条件が増えるほど、優先順位があいまいになり、比較に時間がかかることがあります。条件が合うかどうかに意識が向きすぎると、会話の心地よさを見落とす場合もあります。",
    nextStep: "希望条件を「必須」「できれば」「見直せる」に分けてみましょう。条件表だけで判断せず、実際に話した印象も同じメモに残すと、選択肢を整理しやすくなります。",
    actionCards: [
      { title: "結婚相談所比較 準備中", description: "条件・費用・サポート内容を比較して、優先順位を整理しやすくします。" },
      { title: "婚活アプリ比較 準備中", description: "条件検索のしやすさや料金感を見比べ、使いやすさを整理できます。" },
      { title: "婚活コラム 準備中", description: "条件の分け方や見直し方を短く確認し、判断軸を整えるヒント集です。" },
      { title: "占い鑑定 準備中", description: "迷いを言葉にして、自己理解と選択肢整理を補助する参考ページです。" },
    ],
  },
  confidence: {
    id: "confidence",
    title: "自信回復タイプ",
    tendency: "婚活に興味はありつつ、自分の魅力や選ばれる感覚に不安を抱きやすい傾向があります。まずは安心できる形で、自分を見直す時間を持ちたいタイプです。",
    commonPattern: "不安が強いと、誘いを受ける前から諦めたり、相手の反応を悪い方向に受け取りやすくなったりします。行動量を増やす前に、心の負担が大きくなることがあるかもしれません。",
    nextStep: "過去に褒められたことや、自然にできている気遣いを書き出してみましょう。プロフィールや会話の準備を小さく整えるだけでも、次の一歩を考えやすくなります。",
    actionCards: [
      { title: "婚活コラム 準備中", description: "気持ちを整えながら、強みや伝え方を見直すヒントを短く確認できます。" },
      { title: "占い鑑定 準備中", description: "不安を言葉にして、自己理解と選択肢整理を補助する参考ページです。" },
      { title: "結婚相談所比較 準備中", description: "相談しながら進めたい場合のサポート内容や費用感を整理できます。" },
      { title: "婚活アプリ比較 準備中", description: "小さく試せる行動を始めるために、使いやすい機能を比較できます。" },
    ],
  },
  action: {
    id: "action",
    title: "受け身脱却タイプ",
    tendency: "婚活を始めたい気持ちはあるものの、最初の行動を後回しにしやすい傾向があります。考えすぎる前に、小さく試すことで流れを作りやすいタイプです。",
    commonPattern: "情報収集だけで満足したり、忙しさを理由に登録や連絡を先延ばしにしたりすることがあります。大きな決断から始めようとすると、かえって動きにくくなるかもしれません。",
    nextStep: "今週できる15分の行動を1つだけ決めてみましょう。プロフィールの下書き、候補サービスの比較、友人への相談など、完了しやすい一歩から始めるのがおすすめです。",
    actionCards: [
      { title: "婚活アプリ比較 準備中", description: "小さく試せる行動を考えるために、始めやすい使い方や機能を比較できます。" },
      { title: "婚活コラム 準備中", description: "15分でできる準備を中心に、続けやすい行動の作り方を短く確認できます。" },
      { title: "結婚相談所比較 準備中", description: "一人で進めにくいときに、相談できるサポートの違いを整理できます。" },
      { title: "占い鑑定 準備中", description: "迷いを言葉にして、自己理解と選択肢整理を補助する参考ページです。" },
    ],
  },
  restart: {
    id: "restart",
    title: "再スタート婚活タイプ",
    tendency: "過去の恋愛やブランクを意識しながらも、これからの出会いを考え直したい傾向があります。急に前向きになろうとするより、今の自分に合う形へ整え直すタイプです。",
    commonPattern: "過去の経験を基準にしすぎると、新しい相手にも同じ不安を重ねてしまうことがあります。久しぶりの婚活では、場の雰囲気や進め方に慣れるまで負担を感じやすいかもしれません。",
    nextStep: "まずは過去から学んだことと、これから変えたいことを分けて書いてみましょう。慣らし期間を作り、少人数とのやり取りから再開すると、負担を調整しやすくなります。",
    actionCards: [
      { title: "占い鑑定 準備中", description: "気持ちや結婚観を見直しながら、自己理解と選択肢整理を補助する参考ページです。" },
      { title: "婚活コラム 準備中", description: "再スタート前に整理したいことや、負担を抑える進め方を短く確認できます。" },
      { title: "結婚相談所比較 準備中", description: "ブランク期を踏まえて相談しやすいサポート体制を比較できます。" },
      { title: "婚活アプリ比較 準備中", description: "久しぶりでも試しやすい使い方を、機能や費用感の面で整理できます。" },
    ],
  },
  values: {
    id: "values",
    title: "結婚観見直しタイプ",
    tendency: "婚活を進める前に、自分にとって結婚がどんな意味を持つのかを整理したい傾向があります。周りのペースより、自分らしい暮らしや関係性を確認したいタイプです。",
    commonPattern: "気持ちが定まらないまま動くと、出会いの場で迷いが出たり、相手に合わせすぎたりすることがあります。結婚したい理由が曖昧だと、選択肢を比べる基準も揺れやすくなるかもしれません。",
    nextStep: "理想の暮らし、避けたい暮らし、誰かと分かち合いたい時間を書き出してみましょう。すぐに結論を出すより、結婚観を言葉にすることから始めるのがおすすめです。",
    actionCards: [
      { title: "占い鑑定 準備中", description: "価値観・生活観・安心感を見直し、自己理解と選択肢整理を補助する参考ページです。" },
      { title: "婚活コラム 準備中", description: "結婚観や理想の暮らしを言葉にするための整理ポイントを短く確認できます。" },
      { title: "結婚相談所比較 準備中", description: "相談しながら進めたい場合のサポート内容や費用感を比較できます。" },
      { title: "婚活アプリ比較 準備中", description: "価値観を確認しやすい使い方を、条件や機能の面で整理できます。" },
    ],
  },
};

export function getDiagnosisResultByType(type: DiagnosisTypeId): DiagnosisResult {
  return diagnosisResults[type];
}

export function getDiagnosisResult(answers: DiagnosisTypeId[]): DiagnosisResult {
  const scores = Object.fromEntries(diagnosisTypeIds.map((id) => [id, 0])) as Record<DiagnosisTypeId, number>;

  answers.forEach((answer) => {
    scores[answer] += 1;
  });

  const winningType = tieBreakPriority.reduce<DiagnosisTypeId>((currentWinner, candidate) => {
    if (scores[candidate] > scores[currentWinner]) {
      return candidate;
    }

    return currentWinner;
  }, tieBreakPriority[0]);

  return diagnosisResults[winningType];
}
