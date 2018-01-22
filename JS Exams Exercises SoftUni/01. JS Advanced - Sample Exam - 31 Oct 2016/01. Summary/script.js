$(document).ready(
    generateSummary('#generate')
);

function generateSummary(clickEventSelektor) {
    $(clickEventSelektor).on('click', function() {
        let summaryText = $('#content strong').text();
        createSunnary(summaryText);
    });
}

function createSunnary(summaryText) {
    let summaryDiv = $('<div id="summary">');
    let title = $('<h2>').text('Summary');
    let paragraph = $('<p>').text(summaryText);

    summaryDiv.append(title);
    summaryDiv.append(paragraph);   
    let parent = $('#content').parent();
    parent.append(summaryDiv);
}