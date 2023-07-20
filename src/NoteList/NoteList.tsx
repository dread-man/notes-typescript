import { useState } from 'react'
import { Row, Col, Stack, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactSelect from 'react-select'
import { Tag } from '../App'

type NoteListProps = {
    availableTags: Tag[]
}

export function NoteList({ availableTags }: NoteListProps) {
    const [selectedTags, setSelectedTags] = useState<Tag[]>([])

    return (
        <>
            <Row>
                <Col>
                    <h1>Notes</h1>
                </Col>
                <Col xs="auto">
                    <Stack gap={2} direction="horizontal">
                        <Link to="/new">
                            <Button variant="primary">Create</Button>
                        </Link>
                        <Button variant="outline-secondary">Edit Tags</Button>
                    </Stack>
                </Col>
            </Row>
            <Form>
                <Row className="mb-4">
                    <Col>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="tags">
                            <Form.Label>Tags</Form.Label>
                            <ReactSelect
                                value={selectedTags.map((tag) => {
                                    return { label: tag.label, value: tag.id }
                                })}
                                options={availableTags.map((tag) => {
                                    return { label: tag.label, value: tag.id }
                                })}
                                onChange={(tags) => {
                                    setSelectedTags(
                                        tags.map((tag) => {
                                            return {
                                                label: tag.label,
                                                id: tag.value,
                                            }
                                        })
                                    )
                                }}
                                isMulti
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
