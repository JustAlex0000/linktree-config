function LinkButton({ label, url }) {
    return (
        <a href={url} className="link-button">
            {label}
        </a>
    );
}

export default LinkButton;