const createWordElement = word => {
  const span = document.createElement("span");
  span.innerText = word;

  return span;
};

const amazonParser = (json, speakers) => {
  const getSpeakers = speakerJson => {
    let speakers = new Map();

    for (let segment of speakerJson.segments) {
      for (let item of segment.items) {
        speakers.set(item.start_time, item.speaker_label);
      }
    }

    return speakers;
  };

  const createSpeakerElement = (speaker, words) => {
    const block = document.createElement("div");
    const speakerName = document.createElement("div");
    const content = document.createElement("div");
    block.setAttribute("class", "speaker");
    speakerName.setAttribute("class", "name");
    content.setAttribute("class", "words");

    speakerName.innerText = speakers[speaker];

    for (let i = 0; i < words.length; i++) {
      content.appendChild(createWordElement(words[i].alternatives[0].content));

      if (i < words.length - 1 && words[i + 1].type === "pronunciation") {
        content.appendChild(createWordElement(" "));
      }
    }

    block.appendChild(speakerName);
    block.appendChild(content);

    return block;
  };

  return {
    createElement: () => {
      const speakers = getSpeakers(json.results.speaker_labels);
      // console.log(json);
      let containerEl = document.createElement("div");
      let currentSpeaker = null;
      let speaker = null;
      let words = [];
      for (let item of json.results.items) {
        if (item.type === "punctuation") {
          words.push(item);
        } else {
          speaker = speakers.get(item.start_time);
          if (
            currentSpeaker !== speaker &&
            item.alternatives[0].confidence == 1
          ) {
            if (words.length) {
              containerEl.appendChild(
                createSpeakerElement(currentSpeaker, words)
              );
            }
            currentSpeaker = speaker;
            words = [item];
          } else {
            words.push(item);
          }
        }
      }
      return containerEl;
    }
  };
};

const googleParser = (json, speakers) => {
  const createSpeakerElement = speaker => {
    const block = document.createElement("div");
    const speakerName = document.createElement("div");
    const content = document.createElement("div");
    block.setAttribute("class", "speaker");
    speakerName.setAttribute("class", "name");
    content.setAttribute("class", "words");

    speakerName.innerText = speakers[speaker];

    block.appendChild(speakerName);
    block.appendChild(content);

    return block;
  };

  return {
    createElement: () => {
      let container = document.createElement("div");
      let currentSpeakerEl = null;
      let currentSpeaker = null;
      let words = json.results[0].alternatives[0].words;
      for (let word of words) {
        if (currentSpeaker !== word.speakerTag) {
          if (currentSpeakerEl !== null) {
            container.appendChild(currentSpeakerEl);
          }
          currentSpeaker = word.speakerTag;
          currentSpeakerEl = createSpeakerElement(currentSpeaker);
        }
        currentSpeakerEl
          .getElementsByClassName("words")[0]
          .appendChild(createWordElement(word.word));
        currentSpeakerEl
          .getElementsByClassName("words")[0]
          .appendChild(createWordElement(" "));
      }

      container.appendChild(currentSpeakerEl);
      return container;
    }
  };
};

const googleLongRunningParser = (json, speakers) => {
  const createSpeakerElement = speaker => {
    const block = document.createElement("div");
    const speakerName = document.createElement("div");
    const content = document.createElement("div");
    block.setAttribute("class", "speaker");
    speakerName.setAttribute("class", "name");
    content.setAttribute("class", "words");

    speakerName.innerText = speakers[speaker];

    block.appendChild(speakerName);
    block.appendChild(content);

    return block;
  };

  return {
    createElement: () => {
      let container = document.createElement("div");
      let currentSpeakerEl = null;
      let currentSpeaker = null;
      let result = json.results.pop();
      let words = result.alternatives[0].words;

      for (let word of words) {
        if (currentSpeaker !== word.speakerTag) {
          if (currentSpeakerEl !== null) {
            container.appendChild(currentSpeakerEl);
          }
          currentSpeaker = word.speakerTag;
          currentSpeakerEl = createSpeakerElement(currentSpeaker);
        }
        currentSpeakerEl
          .getElementsByClassName("words")[0]
          .appendChild(createWordElement(word.word));
        currentSpeakerEl
          .getElementsByClassName("words")[0]
          .appendChild(createWordElement(" "));
      }

      // Add the last speaker element to the container.
      container.appendChild(currentSpeakerEl);

      return container;
    }
  };
};

const run = async () => {
  // const dataUri = "joe_rogan_p1248_three_speakers.json";
  // const dataUri = "output.json";
  const dataUri = "petersonHarris3min.json";
  const speakers = {
    1: "Jordan Peterson",
    3: "Sam Harris"
  };

  const res = await fetch(dataUri);
  json = await res.json();
  // const parser = googleParser(json.response);
  const parser = googleLongRunningParser(json.response, speakers);
  // const parser = amazonParser(json);

  const el = parser.createElement();
  document.getElementById("app").appendChild(el);
};
