import { Router } from 'express';

const router = Router();

router.get('/info', (req, res) => {
  res.json({ version: '1.0', status: 'ok' });
});

router.get('/status', (req,res) => {
    res.json({status: 'ok', uptime: process.uptime() });
});

const projects = [
  { name: 'Weather app', tag: 'javascript' },
  { name: 'Portfolio site', tag: 'express' },
  { name: 'Budget tracker', tag: 'python' },
  { name: 'Task manager', tag: 'python' },
];

router.get('/projects', (req, res) => {
  const tag = req.query.tag;

  if (!tag) {
    return res.json(projects); // decision #1: missing tag -> show everything
  }

  const filtered = projects.filter(project => project.tag === tag);

  if (filtered.length === 0) {
    return res.status(404).json({ message: `No projects found with tag "${tag}"` }); // decision #2: no match
  }

  res.json(filtered);
});

    

export default router;